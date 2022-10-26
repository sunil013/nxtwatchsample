import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import NotFound from './components/NotFound'
import RegistrationContext from './context/RegistrationContext'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {name: '', topic: topicsList[0].id, showError: false}

  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeTopic = event => {
    this.setState({
      topic: event.target.value,
    })
  }

  onFormSuccess = () => {
    this.setState({
      registered: true,
    })
    const {history} = this.props
    history.replace('/')
  }

  onClickRegister = event => {
    event.preventDefault()
    const {name} = this.state
    if (name === '') {
      this.setState({showError: true})
    } else {
      this.onFormSuccess()
    }
  }

  render() {
    const {name, topic, showError, registered} = this.state
    return (
      <RegistrationContext.Provider
        value={{
          name,
          topic,
          showError,
          registered,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onClickRegister: this.onClickRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/jobs" component={Jobs} /> */}
          <Route exact path="/register" component={Registration} />
          <Route component={NotFound} />
        </Switch>
      </RegistrationContext.Provider>
    )
  }
}

export default withRouter(App)
