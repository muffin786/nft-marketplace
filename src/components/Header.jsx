import react, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from './search.svg';

const Header = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search submitted:', searchValue);
    setSearchValue('');
  };

    return (
      <div id="header">
        <Link to='/' id='logo'>P2E Pro</Link>
        <div className="nav-middle">
         <img
           src={SearchIcon}
           alt="search"
           onClick={() => handleSearchSubmit}
          />
          <input
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Collection, Item or user"
          />
         
        </div>
        <div id="nav-right">
          <Link to = '/'><a>Home</a></Link>
          <Link to='/explore'><a>Explore</a></Link>
          <Link to= '/create'><a>Create</a></Link>
          <Link to= '/blog'><a>Blog</a></Link>
          <Link to= '/contact'><a>Contact</a></Link>
          <button id="connect-wallet">Login!</button>
        </div>
      </div>
    );
}

export default Header;