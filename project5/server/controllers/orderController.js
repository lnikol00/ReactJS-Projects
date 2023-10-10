import Order from "../models/OrderModel.js";

export const placeOrder = async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, total, shippingPrice, estimatedTotal } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order items")
        return
    }
    else {
        const order = new Order({
            orderItems, shippingAddress, paymentMethod, total, shippingPrice, estimatedTotal
        })

        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
}