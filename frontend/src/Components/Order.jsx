import React from 'react';

const Order = ({ selectedItems }) => {
  return (
    <section id="order" className="order-section">
      <h3>Your Order</h3>
      {selectedItems.length === 0 ? (
        <p>No items added to the order yet.</p>
      ) : (
        <div>
          {selectedItems.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <div>
            <button onClick={() => alert('Order Placed!')} className="place-order-button">
              Place Order
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Order;
