import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-description-card">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="clothes-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have alaway been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heared
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shon-now-btn">
          Shop Now
        </button>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-large-img"
          />
        </div>
      </div>
    </div>
  </>
)
export default Home
