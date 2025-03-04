import { Link } from "react-router-dom"
import banner_image from "../../assets/home.jpg"

const Banner = () => {
    return (
        <div className="section__container header__container">
            <div className="header__content z-30">
                <h4 className="uppercase">Up to 20% discount on</h4>
                <h1>Girl&apos;s Fa<span>shion</span></h1>
                <p>Discover our latest collection of trendy girls&apos; fashion with amazing discounts. From stylish dresses to comfortable casuals, find the perfect outfits for every occasion. Shop now and save up to 20% on selected items while stocks last.</p>
                <button className="btn"><Link to="/shop">EXPLORE</Link></button>
            </div>
            <div className="header__image">
                <img src={banner_image} alt="banner_image" />
            </div>
        </div>
    )
}

export default Banner