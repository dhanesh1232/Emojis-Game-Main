// Write your code here.
import './index.css'

const WinOrLoss = props => {
  const {score, lengthOfList, onRenderPage} = props
  const leng = score === lengthOfList
  const title = leng ? 'You Won' : 'You Lose'
  const imgUrl = leng
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const onReRenderPage = () => {
    onRenderPage()
  }
  return (
    <div className="result-card">
      <div className="card">
        <div className="result-data">
          <h1 className="result-title-s">{title}</h1>
          <p className="score-p">
            Best Score <br />
            <p className="span">{score}/12</p>
          </p>
          <button type="button" className="btn-click" onClick={onReRenderPage}>
            Play Again
          </button>
        </div>
        <img src={imgUrl} alt="win or lose" className="imgUrl" />
      </div>
    </div>
  )
}
export default WinOrLoss
