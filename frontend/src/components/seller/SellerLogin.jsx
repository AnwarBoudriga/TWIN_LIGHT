import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function SellerLogin() {
    const { setIsSeller } = useAppContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!email.trim() || !password.trim()) {
            toast.error('Veuillez remplir tous les champs');
            return;
        }

        setIsLoading(true);
        
        try {
            const { data } = await axios.post('/api/seller/login', 
                { 
                    email: email.trim(), 
                    password: password.trim() 
                },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            if (data.success) {
                setIsSeller(true);
                toast.success('Connexion réussie');
                navigate('/seller');
            } else {
                toast.error(data.message || 'Identifiants incorrects');
            }
        } catch (error) {
            console.error('Erreur complète:', error);
            const errorMsg = error.response?.data?.message || 
                           error.message || 
                           'Erreur de connexion au serveur';
            toast.error(errorMsg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
            <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200'>
                <h1 className='text-2xl font-medium m-auto'>
                    <span className='text-primary'>Espace</span> Vendeur
                </h1>
                
                <div className='w-full'>
                    <label>Email</label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                        type="email" 
                        placeholder='admin@example.com' 
                        className='border border-gray-200 rounded w-full p-2 mt-1' 
                        required
                    />
                </div>
                
                <div className='w-full'>
                    <label>Mot de passe</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        type="password" 
                        placeholder='••••••••' 
                        className='border border-gray-200 rounded w-full p-2 mt-1' 
                        required
                    />
                </div>
                
                <button 
                    type="submit"
                    disabled={isLoading}
                    className={`bg-primary text-white w-full py-2 rounded-md ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'}`}
                >
                    {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                </button>
            </div>
        </form>
    );
}

export default SellerLogin;