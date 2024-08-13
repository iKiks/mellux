import React, { useState, useEffect } from 'react';
import api from '../api';  // Import the axios instance
import '../styles/ProductUploadForm.css';

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    image: null,
  });

  const [categories, setCategories] = useState([]);

  // Fetch categories when the component mounts
  useEffect(() => {
    api.get('/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = new FormData();
    for (let key in formData) {
      productData.append(key, formData[key]);
    }

    api.post('/api/products/create/', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Product uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error uploading the product!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="product-upload-form">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          placeholder='$'
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUploadForm;
