import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import CartModel from "../pages/shop/CartModel";

const NavBar = () => {
    const cartState = useSelector((state) => state.cart);

    const [isCartOpen, setIsCartOpen]   = useState(false);
    const handleCartToggle=()=>{
        setIsCartOpen(!isCartOpen);
    }
    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };


    return (
        <header className="fixed-nav-bar w-nav">
            <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
                <ul className="nav__links">
                    <li className="link underline decoration-solid decoration-rose-600"><Link to="/">Home</Link></li>
                    <li className="link underline decoration-solid decoration-rose-600"><Link to="/shop">Shop</Link></li>
                    <li className="link underline decoration-solid decoration-rose-600"><Link to="#contact" onClick={scrollToContact}>Contact Us</Link></li>
                    <li className="link underline decoration-solid decoration-rose-600"><Link to="/about">About Us</Link></li>
                </ul>
                {/* Logo */}
                <div className="nav__logo">

                    <Link to="/">Shra<span>ddha</span></Link>
                </div>
                {/* Icons */}
                <div className="nav__icons relative">
                    <span><Link to="/search">
                        <i className="ri-search-line"></i>
                    </Link></span>

                    <span>
                        <button onClick={handleCartToggle} className="hover:text-primary">
                            <i className="ri-shopping-cart-fill"></i>
                            <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                                {cartState.products.length}
                            </sup>
                        </button>
                    </span>

                    <span><Link to="/search">
                        <i className="ri-user-line"></i>
                    </Link></span>
                </div>
            </nav>
            {
            isCartOpen && <CartModel products={cartState.products} isOpen={isCartOpen} onClose={handleCartToggle}/>
            }
        </header>
    )
}


export default NavBar