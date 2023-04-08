// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isActive} = props
  const isScore = isActive ? 'score' : 'none-score'
  const isAngle = isActive ? 'emoji-game' : 'head'
  return (
    <nav className="nav-bar">
      <div className={isAngle}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={isScore}>
        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
