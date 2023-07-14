import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {inputValue: '', isActive: true}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onSaveText = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {inputValue, isActive} = this.state

    return (
      <div className="app-container">
        <div className="editable-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {isActive ? (
              <input
                type="text"
                className="input"
                onChange={this.onChangeInput}
                value={inputValue}
              />
            ) : (
              <p>{inputValue}</p>
            )}
            {isActive ? (
              <button
                type="button"
                className="button"
                onClick={this.onSaveText}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="button"
                onClick={this.onSaveText}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
