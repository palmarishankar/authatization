import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {searchInput: '', passwordInput: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {searchInput, passwordInput} = this.state
    const userDetails = {searchInput, passwordInput}
    const url = ' https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = response.json()
    console.log(response)
  }

  onChangeUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <br />
            <label htmlFor="username" className="user-name">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              onChange={this.onChangeUserInput}
            />
            <label htmlFor="password" className="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              onChange={this.onChangePasswordInput}
            />

            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
