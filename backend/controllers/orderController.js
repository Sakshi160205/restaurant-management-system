const Order = require('../models/Order');

const placeOrder = async (req, res) => {
  const { items } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'Order cannot be empty' });
  }

  const totalAmount = items.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price;
  }, 0).toFixed(2);

  const newOrder = new Order({
    items,
    totalAmount: `$${totalAmount}`,
  });

  try {
    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  placeOrder,
};
