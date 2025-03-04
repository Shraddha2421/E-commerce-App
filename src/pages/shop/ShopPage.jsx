import { useState , useEffect} from "react";
// import productsData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
import useProducts from "../../hooks/useProducts";
import LoadingSpinner from "../../components/LoadingSpinner";

const filters = {
    categories: ['all']
  };


const ShopPage = () => {

    const { data: products, loading, error } = useProducts();

    // Initialize filteredProducts state
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Set initial filtered products when products data loads
    useEffect(() => {
        if (products) {
            setFilteredProducts(products);
        }
    }, [products]);

    const productCategories = products?.map(product => product.category) || [];
    const uniqueCategories = [...new Set(productCategories)];

    filters.categories = ['all', ...uniqueCategories];
    console.log(filters.categories)
    
    const [filtersState, setFiltersState] = useState({
        categories: 'all'
    });

    // Updated filter handler with null checks
    const handleFilterChange = () => {
        if (!products) return;
        
        if (filtersState.categories === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(
                product => product.category === filtersState.categories
            );
            setFilteredProducts(filtered);
        }
    }

    // Only run filter when filtersState changes and products are available
    useEffect(() => {
        if (products) {
            handleFilterChange();
        }
    }, [filtersState]);

    const clearFilters = () => {
        setFiltersState({
            categories: 'all'
        });
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
        <h2 className="section__header">Shop</h2>
        <p className="section__subheader">Explore our curated collection of high-quality clothing and accessories. From casual wear to formal attire, find the perfect pieces to express your unique style.</p>
      </section>
      <section className="section__container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <ShopFiltering filters={filters} setFilteresState={setFiltersState} clearFilters={clearFilters} filteresState={filtersState}/>
            <div >
                <h4 className="text-xl font-medium mb-4">Available Products : {filteredProducts.length}</h4>
                <ProductCards products={filteredProducts} />
            </div>
        </div>

      </section>
    </>
  )
}
export default ShopPage