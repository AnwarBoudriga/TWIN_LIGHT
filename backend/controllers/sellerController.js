import jwt from "jsonwebtoken";


// Login Seller : /api/seller/login

export const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Solution finale - comparaison directe avec vérification de type
        const correctEmail = "admin@example.com";
        const correctPassword = "TwinLight123";

        console.log("Reçu:", { email, password });
        console.log("Attendu:", { correctEmail, correctPassword });

        if (String(email).trim() !== String(correctEmail).trim()) {
            console.log("Email ne correspond pas");
            return res.status(401).json({
                success: false,
                message: "Email ou mot de passe incorrect (email)"
            });
        }

        if (String(password).trim() !== String(correctPassword).trim()) {
            console.log("Mot de passe ne correspond pas");
            return res.status(401).json({
                success: false,
                message: "Email ou mot de passe incorrect (password)"
            });
        }

        const token = jwt.sign(
            { email }, 
            "votre_clé_secrète_forte_ici", 
            { expiresIn: '7d' }
        );

        res.cookie('sellerToken', token, {
            httpOnly: true,
            secure: false, // Mettez à true en production avec HTTPS
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ 
            success: true, 
            message: "Connexion réussie",
            user: { email }
        });

    } catch (error) {
        console.error("Erreur serveur:", error);
        return res.status(500).json({
            success: false,
            message: "Erreur interne du serveur"
        });
    }
}
// Check Seller Authentication
export const isSellerAuth = async (req, res) => {
    try {
        // Cette fonction est généralement appelée après le middleware authSeller
        // donc req.seller devrait être disponible
        return res.status(200).json({ 
            success: true,
            seller: req.seller // Information du vendeur authentifié
        });
    } catch (error) {
        console.error("Error in isSellerAuth:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// Logout Seller : /api/seller/logout

export const sellerLogout = async (req, res) => {
    try {
        res.clearCookie('sellerToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.json({ success: true, message: "Logged Out" })
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message });
    }
}