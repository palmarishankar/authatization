import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="person-information">
      <h1>Cloth That Get YOU Noticed</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="cloth that get you noticed"
        className="person"
      />
    </div>
  </>
)

export default Home
