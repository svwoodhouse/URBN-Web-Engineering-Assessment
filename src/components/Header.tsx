import { useState } from 'react';
import companyLogo from '../assets/company-logo.webp'
import searchImage from '../assets/search.webp'
import cartImage from '../assets/cart.png'

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    
    return (
        <div className="header-container">
            <div className="company-logo-container">
                <img className="company-logo" src={companyLogo}></img>
            </div>
            <div className='search-bar-container'>
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
            <div className='cart-container'>
                <img className='cart-image' src={cartImage}></img>
                0
            </div>
        </div>
    )
}

export default Header;