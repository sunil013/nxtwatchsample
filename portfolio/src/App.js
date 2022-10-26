import {Component} from 'react'
// import {Routes, Route} from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import Projects from './components/Projects'
import PortfolioContext from './context/PortfolioContext'

class App extends Component {
  state = {darkTheme: false}

  onChangeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <PortfolioContext.Provider
        value={{
          darkTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Router>
          <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route component={NotFound} />
          </Routes>
        </Router>
      </PortfolioContext.Provider>
    )
  }
}

export default App
