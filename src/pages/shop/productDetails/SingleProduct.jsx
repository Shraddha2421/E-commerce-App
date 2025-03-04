import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../../../hooks/useProducts";
import RatingStars from "../../../components/RatingStars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import LoadingSpinner from "../../../components/LoadingSpinner";

const SingleProduct = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    const {id} = useParams();
    const { data: product, loading, error } = useProducts(id);
    console.log(product)
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    
    
    if(loading){
        return <LoadingSpinner/>
    }
    if(error){
        return <div>Error: {error}</div>
    }

  return (
    <>
    <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Product Details</h2>
        <div className="section__subheader space-x-2">
            <span className="hover:text-primary"><Link to="/">Home</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="hover:text-primary"><Link to="/shop">Shop</Link></span>
            <i className="ri-arrow-right-s-line"></i>
            <span className="hover:text-primary"><Link to={`/shop/${id}`}>{product.title}</Link></span>
        </div>
    </section>
    <section className="section__container mt-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
                <img src={product?.images[0]} alt={product?.title} className="w-full h-[400px] hover:scale-105 transition-all duration-300 rounded-md" />
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{product?.title}</h3>
                <p className="text-xl text-primary mb-4">${product?.price} <s>{product?.discountPercentage ? `$${(product.price * (1 + product.discountPercentage/100)).toFixed(2)}` : ''}</s>
                </p>
                <p className="text-gray-600 mb-4">{product?.description}</p>
                <div>
                    <p><strong>Category: </strong> {product?.category}</p>
                    <p><strong>Brand: </strong> {product?.brand}</p>
                    <div className="flex items-center gap-2">
                        <strong>Rating: </strong>
                        <RatingStars rating={product?.rating}/>
                    </div>
                </div>
                <button 
                    className="mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-300" 
                    onClick={(e)=>{
                        e.stopPropagation();
                        handleAddToCart(product);
                    }}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    </section>
    </>
  )
}
export default SingleProduct