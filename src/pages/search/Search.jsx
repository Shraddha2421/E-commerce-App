import { useEffect, useState } from "react"
import ProductCards from "../shop/ProductCards";
import useProducts from "../../hooks/useProducts";
import LoadingSpinner from "../../components/LoadingSpinner";


const Search = () => {

  const {data:products,loading,error} = useProducts();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearch = () => {
    if (!products || products.length === 0) return;
    
    const query = searchQuery.toLowerCase();
    const filtered = products.filter((product) => 
      product.title.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }

  // Add these console logs
  console.log('Products:', products);
  console.log('Loading:', loading);
  console.log('Error:', error);

  if (loading) {
    return <LoadingSpinner/>
  }
  
  if (error) {
    return <div className="section__container">Error: {error}</div>
  }

  if (!products || products.length === 0) {
    return <div className="section__container">No products found</div>
  }

  return (
    <>
      {/* <section className="section__container bg-primary-light">
        <h2 className="section__header">Search</h2>
        <p className="section__subheader">Find exactly what you&apos;re looking for in our extensive collection. Search by product name or description to discover your perfect style match.</p>
      </section> */}
      <section className="section__container">
        <div className="w-full mb-12  flex flex-col md:flex-row gap-4 justify-center">
          <input
            className="search-bar w-full max-w-4xl p-2 border border-gray-700 focus:border-black rounded-md"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products..."
          />
          <button className='search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded' onClick={handleSearch}>Search</button>

        </div>
        <ProductCards products={filteredProducts} />
      </section>

    </>

  )
}
export default Search