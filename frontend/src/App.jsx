import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';

import './App.css'; 

import Search from './Components/Search';
import Menu from './Components/Menu';

const menuCategories = [
  {
    category: 'Starters',
    items: [
      { name: 'Bruschetta', description: 'Grilled bread with tomatoes, basil, and garlic', price: 7.99, image: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/bruschetta-17-1200.jpg' },
      { name: 'Stuffed Mushrooms', description: 'Mushrooms filled with cheese, garlic, and herbs', price: 8.99, image: 'https://th.bing.com/th/id/OIP.eO_pgLEI0YvZ5s-iekE7-AHaLH?w=600&h=900&rs=1&pid=ImgDetMain' },
      { name: 'Caprese Salad', description: 'Tomatoes, mozzarella, basil, and balsamic reduction', price: 9.99, image: 'https://www.cookingclassy.com/wp-content/uploads/2020/07/caprese-salad-33-560x728.jpg' }
    ],
  },
  {
    category: 'Main Courses',
    items: [
      { name: 'Grilled Salmon', description: 'Fresh salmon with garlic butter sauce and steamed vegetables', price: 19.99, image: 'https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-9.jpg' },
      { name: 'Lasagna', description: 'Layers of pasta, cheese, and marinara sauce', price: 14.99, image: 'https://th.bing.com/th/id/R.c210841b5f26474b1e3cfa2d690106d9?rik=xM%2fdIKamk1kc1w&riu=http%3a%2f%2fcdn.allotta.io%2fimage%2fupload%2fv1707362990%2fdxp-images%2fbrands%2fRecipes%2fcanada-recipe-assets-final%2fkraft-classic-lasagna%2fgenerated%2fkraft-classic-lasagna-530925.png&ehk=awrXai8d7nBSqeR9xOJOEgnLqO5ZHq59SD0RWM18xYM%3d&risl=&pid=ImgRaw&r=0' },
      { name: 'Ribeye Steak', description: 'Juicy ribeye steak with mashed potatoes and asparagus', price: 24.99, image: 'https://prairiemeats.ca/wp-content/uploads/2019/11/023097-Ribeye-Steak-beef-stock.jpg' }
    ],
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', description: 'Layered coffee and mascarpone dessert', price: 6.99, image: 'https://thebananadiaries.com/wp-content/uploads/2021/12/vegan-tiramisu-recipe_4577-672x896.jpg' },
      { name: 'Cheesecake', description: 'Creamy cheesecake with a graham cracker crust', price: 5.99, image: 'https://thefirstyearblog.com/wp-content/uploads/2017/07/Classic-Cheesecake-17B-280x420.jpg' },
      { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: 7.49, image: 'https://gimmedelicious.com/wp-content/uploads/2020/01/Chocolate-Molten-Lava-Cakes-2-3-400x560.jpg' }
    ],
  },
  {
    category: 'Beverages',
    items: [
      { name: 'House Wine', description: 'A glass of red or white wine', price: 5.99, image: 'https://th.bing.com/th/id/OIP.OnHi-qkKN51NXsHx_iRgbQD6D6?rs=1&pid=ImgDetMain' },
      { name: 'Fresh Lemonade', description: 'Refreshing homemade lemonade', price: 3.49, image: 'https://thumbs.dreamstime.com/b/fresh-lemonade-drink-refreshing-ripe-fruits-against-wooden-background-44120205.jpg' },
      { name: 'Coffee', description: 'Hot brewed coffee served with cream and sugar', price: 2.99, image: 'https://th.bing.com/th/id/R.3c67e53d682589dcb8ce02dd3ac1e20c?rik=LeUqj%2bnBd3%2f0WA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2017%2f11%2f17%2f239445-coffee-coffee_beans-cup.jpg&ehk=%2bEd%2bhMjaHGMrExklwM9MNbALfkaDNqvDmS67gs%2bf2OA%3d&risl=&pid=ImgRaw&r=0' }
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      
      <About />
      
      <Search menuCategories={menuCategories} />

      <Footer />
    </div>
  );
}

export default App;
