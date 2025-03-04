const PromoBanner = () => {
  return (
    <section className="section__container banner__container">
        <div className="banner__card">
            <span><i className="ri-truck-line"></i></span>
            <h4>Free Delivery</h4>
            <p>Enjoy complimentary shipping on all orders across the country.</p>
        </div>
        <div className="banner__card">
            <span><i className="ri-money-dollar-circle-line"></i></span>
            <h4>100% Money Back Guarentee</h4>
            <p>Not satisfied? Get a full refund within 30 days of purchase.</p>
        </div>
        <div className="banner__card">
            <span><i className="ri-user-voice-line"></i></span>
            <h4>Strong Support</h4>
            <p>Our dedicated team is here to help you 24/7 with any questions.</p>
        </div>
    </section>
  )
}

export default PromoBanner