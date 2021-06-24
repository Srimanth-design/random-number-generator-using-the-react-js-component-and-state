import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNo = this.randomNumber()
    this.setState(prevState => ({count: prevState.count + randomNo}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-bg">
        <div className="card">
          <h1 className="main-head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="mov-btn">
            <button
              type="button"
              className="btn btn-primary btn-one"
              onClick={this.onIncrement}
            >
              Generate
            </button>
          </div>
          <h1 className="count-num">{count}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
