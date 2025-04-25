import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
    const { sellerToken } = req.cookies;

    if (!sellerToken) {
        return res.status(401).json({ 
            success: false, 
            message: 'Not authorized, no token' 
        });
    }

    try {
        const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET || "your_secret");
        req.seller = decoded; // Attach decoded token to request
        next();
    } catch (error) {
        return res.status(401).json({ 
            success: false, 
            message: 'Not authorized, token failed' 
        });
    }
};

export default authSeller;