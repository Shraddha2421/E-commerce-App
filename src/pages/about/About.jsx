import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header">About Us</h2>
        <p className="section__subheader">Discover our story and commitment to fashion excellence</p>
      </section>

      <section className="section__container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-header mb-4">Our Story</h3>
              <p className="text-text-light mb-4">
                Founded in 2025, Shraddha has emerged as a comprehensive lifestyle destination. 
                We bring together the finest in food, fashion, and clothing under one roof. Our vision 
                is to provide a curated shopping experience that caters to all aspects of modern living.
              </p>
              {/* <p className="text-text-light">
                Our diverse collection spans from gourmet food products to trendy fashion pieces and 
                quality clothing, carefully selected to meet the varied preferences and needs of our 
                discerning customers.
              </p> */}
            </div>
            <div className="bg-primary-light p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <h4 className="text-4xl font-bold text-primary mb-2">5K+</h4>
                  <p className="text-text-dark">Happy Customers</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold text-primary mb-2">1K+</h4>
                  <p className="text-text-dark">Products</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
                  <p className="text-text-dark">Brands</p>
                </div>
                <div className="text-center">
                  <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-text-dark">Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-header mb-4">Our Mission</h3>
            <p className="text-text-light mb-4">
              At Shraddha, our mission is to enhance everyday living through quality products. We strive to:
            </p>
            <ul className="list-disc list-inside text-text-light space-y-2 ml-4">
              <li>Offer premium quality products across food, fashion, and clothing</li>
              <li>Deliver exceptional customer service and shopping experience</li>
              <li>Maintain sustainable and ethical business practices</li>
              <li>Build a community that celebrates diverse lifestyle choices</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="inline-block text-3xl text-primary mb-4">
                <i className="ri-shield-check-fill"></i>
              </span>
              <h4 className="text-xl font-header mb-2">Quality Assurance</h4>
              <p className="text-text-light">
                Every product undergoes strict quality checks before reaching our customers.
              </p>
            </div>
            <div className="text-center">
              <span className="inline-block text-3xl text-primary mb-4">
                <i className="ri-customer-service-2-fill"></i>
              </span>
              <h4 className="text-xl font-header mb-2">24/7 Support</h4>
              <p className="text-text-light">
                Our dedicated team is always ready to assist you with any queries.
              </p>
            </div>
            <div className="text-center">
              <span className="inline-block text-3xl text-primary mb-4">
                <i className="ri-secure-payment-fill"></i>
              </span>
              <h4 className="text-xl font-header mb-2">Secure Shopping</h4>
              <p className="text-text-light">
                Shop with confidence with our secure payment systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About