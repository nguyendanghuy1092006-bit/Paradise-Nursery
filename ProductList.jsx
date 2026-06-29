import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

// Dữ liệu mẫu - CẦN THÊM ĐỂ ĐỦ 6 CÂY MỖI DANH MỤC
const plantsData = [
  { id: 1, name: 'Aloe Vera', price: 15, category: 'Succulents', image: 'url1' },
  { id: 2, name: 'Snake Plant', price: 20, category: 'Succulents', image: 'url2' },
  { id: 3, name: 'Peace Lily', price: 25, category: 'Flowering', image: 'url3' },
  { id: 4, name: 'Orchid', price: 30, category: 'Flowering', image: 'url4' },
  { id: 5, name: 'Fiddle Leaf Fig', price: 45, category: 'Trees', image: 'url5' },
  { id: 6, name: 'Rubber Plant', price: 40, category: 'Trees', image: 'url6' }
];

function ProductList() {
  const [viewCart, setViewCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isAdded = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  if (viewCart) {
    return <CartItem onContinueShopping={() => setViewCart(false)} />;
  }

  // Nhóm theo category
  const categories = [...new Set(plantsData.map(plant => plant.category))];

  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">Paradise Nursery</div>
        <div className="nav-links">
          <a href="#" onClick={() => setViewCart(false)}>Plants</a>
          <a href="#" onClick={() => setViewCart(true)}>
            Cart 🛒 <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      <div className="product-listing">
        {categories.map(category => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="plant-grid">
              {plantsData.filter(p => p.category === category).map(plant => (
                <div key={plant.id} className="plant-card">
                  {/* <img src={plant.image} alt={plant.name} /> */}
                  <div className="placeholder-img" style={{height:'100px', background:'#ccc'}}>[Thumbnail]</div>
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button 
                    disabled={isAdded(plant.id)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {isAdded(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
