import React, { useState } from 'react';
import Menu from './Menu'; 
import './Search.css';

const Search = ({ menuCategories }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  // Filter items based on search, category, and price
  const filteredItems = menuCategories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => {
                const price = parseFloat(item.price);

        const matchesSearch =
          searchQuery === '' ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === 'All' || item.category === selectedCategory;

        const matchesPrice =
          priceRange === 'All' ||
          (priceRange === 'Under $10' && price < 10) ||
          (priceRange === '$10-$20' && price >= 10 && price <= 20) ||
          (priceRange === 'Above $20' && price > 20);

        return matchesSearch && matchesCategory && matchesPrice;
      }),
    }))
    .filter((category) => category.items.length > 0); 

  return (
    <div className="search-section">
      {/* Search, Category, and Price Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {menuCategories.map((category, index) => (
            <option key={index} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}>
          <option value="All">All Price Ranges</option>
          <option value="Under $10">Under $10</option>
          <option value="$10-$20">$10 - $20</option>
          <option value="Above $20">Above $20</option>
        </select>
      </div>

      {/* Pass filtered items to the Menu component */}
      <Menu filteredItems={filteredItems} />
    </div>
  );
};

export default Search;
