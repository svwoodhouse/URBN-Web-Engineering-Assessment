import { useState } from 'react';
import companyLogo from '../assets/company-logo.webp'
import searchImage from '../assets/search.webp'
import cartImage from '../assets/cart.png'
import '../styles/header.css'

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    
    return (
        <div className="header-container">
            <div className="header-right-section">
                <img className="company-logo" src={companyLogo}></img>
            </div>
            <div className='header-middle-section'>
                <form className='search-bar-form'>
                    <input
                        className='search-bar' 
                        type='text' 
                        value={searchInput}
                        placeholder='Search'
                        onChange={e => setSearchInput(e.target.value)}
                    />
                    <input className="search-button" type='image' src={searchImage} alt='Search' width={48} height={48}></input>
                </form>
            </div>
            <div className='header-left-section'>
                <img className='cart-image' src={cartImage}></img>
                0
            </div>
        </div>
    )
}

export default Header;