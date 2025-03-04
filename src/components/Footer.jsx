import { Link } from "react-router-dom"
const Footer = () => {
  const scrollToBlogs = (e) => {
    e.preventDefault();
    const blogsSection = document.getElementById('blogs');
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="section__container footer__container">
        <div id="contact" className="footer__col">
          <h4>CONTACT <span> US</span></h4>
          <p>
            <span><i className="ri-map-pin-2-fill"></i>
            </span>
            Varanasi, India
          </p>
          <p>
            <span><i className="ri-mail-fill"></i>
            </span>
            info@shraddha.org.in
          </p>
          <p>
            <span><i className="ri-phone-fill"></i>
            </span>
            +91 9421390876
          </p>
        </div>
        <div className="footer__col">
          <h4>COMP<span>ANY</span></h4>
          <a href="/">Home</a>
          <Link to="/about">About Us</Link>
          <a href="/">Work With Us</a>
          <a href="#blogs" onClick={scrollToBlogs}>Our Blogs</a>
          <a href="/">Terms & Condition</a>
        </div>
        <div className='footer__col'>
          <h4>USEFUL <span> LINK</span></h4>
          <a href="/">Help</a>
          <a href="/">Track your order</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">Dresses</a>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2025 All Rights Reserved By Shraddha.
      </div>
    </>
  )
}
export default Footer