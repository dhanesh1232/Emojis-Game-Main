// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, onChangeImage} = props
  const {emojiName, emojiUrl, id} = emojisList

  const changeEmojiPositionsAndIncrementScore = () => {
    onChangeImage(id)
  }

  return (
    <li className="list">
      <button type="button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="img-url"
          onClick={changeEmojiPositionsAndIncrementScore}
        />
      </button>
    </li>
  )
}

export default EmojiCard
