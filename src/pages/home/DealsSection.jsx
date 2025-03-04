import dealsImg from "../../assets/dealss.jpg"

const DealsSection = () => {
  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="" />
      </div>
      <div className="deals__content">
        <h5>Get Up To 40% Discount</h5>
        <h4>Deals Of The<span> Month</span></h4>
        <p>Take advantage of our exclusive monthly deals with incredible savings across our entire collection. Don&apos;t miss out on this limited-time opportunity to get premium quality furniture at unbeatable prices. Shop now and transform your space while keeping your budget in check.</p>
        <div className="deals__countdown float-wrap">
          <div className="deals__countdown__card">
            <h4>24</h4>
            <p>Days</p>
          </div>
          <div className="deals__countdown__card">
            <h4>20</h4>
            <p>Hours</p>
          </div>
          <div className="deals__countdown__card">
            <h4>19</h4>
            <p>Mins</p>
          </div>
          <div className="deals__countdown__card">
            <h4>10</h4>
            <p>Secs</p>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default DealsSection