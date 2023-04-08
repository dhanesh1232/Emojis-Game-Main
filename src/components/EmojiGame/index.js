/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoss from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    previousData: [],
    isActive: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onChangeImages = id => {
    const {previousData} = this.state
    const {emojisList} = this.props
    if (previousData.length <= emojisList.length) {
      if (previousData.every(each => each !== id)) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          previousData: [...prevState.previousData, id],
        }))
        this.shuffledEmojisList(emojisList)
      } else {
        this.setState({isActive: false})
      }
    }
  }

  reRenderPage = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({isActive: false, topScore: score})
    }
    this.setState({score: 0, isActive: true, previousData: []})
    this.shuffledEmojisList()
  }

  render() {
    const {score, topScore, isActive} = this.state
    const emojisListItems = this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isActive={isActive} />
        <div className="container">
          {isActive ? (
            <ul className="emojis">
              {emojisListItems.map(each => (
                <EmojiCard
                  emojisList={each}
                  key={each.id}
                  onChangeImage={this.onChangeImages}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoss
              score={score}
              lengthOfList={emojisListItems}
              onRenderPage={this.reRenderPage}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
