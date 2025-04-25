import express from 'express';
import authUser from '../middlewares/authUser.js';
import { getUserOrders, placeOrderCOD, placeOrderStripe } from '../controllers/orderController.js';



const orderRouter = express.Router();

orderRouter.post('/cod', authUser, placeOrderCOD);
orderRouter.get('/user', authUser, getUserOrders);
orderRouter.get('/seller', authUser, getUserOrders);
orderRouter.get('/stripe', authUser, placeOrderStripe);

export default orderRouter;