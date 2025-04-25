import express from 'express';
import { 
    sellerLogin, 
    isSellerAuth, 
    sellerLogout 
} from '../controllers/sellerController.js';
import authSeller from '../middlewares/authSeller.js';

const router = express.Router();

// Public route
router.post('/login', sellerLogin);

// Protected routes
router.get('/is-auth', authSeller, isSellerAuth);
router.get('/logout', authSeller, sellerLogout);

export default router;