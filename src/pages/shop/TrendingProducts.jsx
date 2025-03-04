import { useState } from "react";
import ProductCards from "./ProductCards"
import useProducts from "../../hooks/useProducts"
import LoadingSpinner from "../../components/LoadingSpinner";

const TrendingProducts = () => {


    const [visible, setVisible] = useState(8);
    const loadMore = () => {
        setVisible(visible => visible + 4);
    }
    const { data , loading, error } = useProducts();
    if(loading){
        return <LoadingSpinner/>
    }
    if(error){
        return <div>Error: {error}</div>
    }



  return (
    <section className="section__container product__container">
        <h2 className="section__header">Trending<span> Products</span></h2>
        <p className="section__subheader">Discover our most popular and in-demand products.</p>
        <div className="mt-12">
        <ProductCards products={data.slice(0,visible)}/>
        </div>
        <div className="product__btn">
            {
                visible < data.length && <button onClick={loadMore} className="btn">Load More</button>
            }
        </div>
        
    </section>
  )
}

export default TrendingProducts