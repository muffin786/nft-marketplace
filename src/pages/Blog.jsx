import React from 'react';
import Header from "../components/Header";
import "../styles/blog.css";

function Blog() {
  const blogPosts = [
    {
      title: 'Introduction to NFTs',
      author: 'John Doe',
      date: 'May 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'The Rise of Digital Art',
      author: 'Jane Smith',
      date: 'May 5, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className='container'>
      <Header />
      <h1>Blogs</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="author-date">
            <span>By {post.author}</span>
            <span>{post.date}</span>
          </p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
