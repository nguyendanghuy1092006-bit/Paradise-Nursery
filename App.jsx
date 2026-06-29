import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  // SỬA LỖI: Đổi tên hàm thành handleGetStartedClick
  const handleGetStartedClick = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      {!showProducts ? (
        <div className="landing-page">
          {/* SỬA LỖI: Thêm chữ "Welcome to" */}
          <h1>Welcome to Paradise Nursery</h1>
          <p>Bring Nature Home</p>
          {/* Cập nhật tên hàm ở onClick */}
          <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
