import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="about">
        <h1>Royal Rasoi</h1>
      <h2>About Our Restaurant</h2>
      <p>Welcome to our restaurant, where we serve delicious food made from the freshest ingredients! 
        Our team is passionate about creating an exceptional dining experience, 
        and we take pride in offering a diverse menu that caters to all tastes.</p>
      <p>Our chefs use traditional cooking techniques along with innovative twists to prepare dishes that are full of flavor and made with love. 
        Whether you're here for a casual meal, a special celebration, or to pick up an order for home, 
        we're committed to providing excellent service every time.</p>
      
      <div className="about-images">
        <div className="image">
          <img src="interior.jpeg" alt="Restaurant Interior" />
          <p>Our cozy and inviting atmosphere</p>
        </div>
        <div className="image">
          <img src="about.jpeg" alt="Delicious Dish" />
          <p>One of our signature dishes</p>
        </div>
        <div className="image">
          <img src="environment.jfif" alt="environment" />
          <p>Fresh Environment</p>
        </div>
        <div className="image">
          <img src="service.webp" alt="Service" />
          <p>Best Service</p>
        </div>
      </div>
      
      <h3>Our Story</h3>
      <p>Founded in 2010, our restaurant has quickly become a local favorite.
         From our humble beginnings, we have expanded our offerings and built a loyal customer base who love our fresh, high-quality meals. 
         We are committed to supporting local farmers and using only the finest ingredients in all of our dishes.</p>
      
      <h3>Our Values</h3>
      <ul>
      
        <li>Fresh, high-quality ingredients</li>
        <li>Customer satisfaction as our top priority</li>
        <li>A warm, welcoming atmosphere</li>
        <li>Commitment to sustainability</li>
      </ul>
    </section>
  );
}

export default About;
