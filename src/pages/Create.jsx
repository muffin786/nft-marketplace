import React, { useState } from 'react';
import Header from '../components/Header';
import "../styles/create.css";

function CreateNFTPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform NFT creation logic here
    console.log('NFT Created');
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Image:', image);
    // Reset form fields
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <div className='container'>
      <Header/>
      <h1>Create NFT</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </label>
        <label>
          Image: 
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateNFTPage;
