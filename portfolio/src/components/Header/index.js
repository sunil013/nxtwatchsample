import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {CgPlayList} from 'react-icons/cg'
import {IoMdClose} from 'react-icons/io'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import PortfolioContext from '../../context/PortfolioContext'
import './index.css'
import {
  Navbar,
  NavbarContainer,
  NavLogo,
  NavLinksContainer,
  NavItemsContainer,
  NavItem,
  NavIconsContainer,
  NavIconItem,
  NavbarTopContainer,
  NavMobileContainer,
  NavMobileListContainer,
  NavMobileItem,
  NavMobileMenuButton,
  NavMobileIcons,
} from './styledComponents'

class Header extends Component {
  state = {showNavbar: false}

  onClickOpenBar = () => {
    this.setState({
      showNavbar: true,
    })
  }

  onClickCloseBar = () => {
    this.setState({
      showNavbar: false,
    })
  }

  render() {
    const {showNavbar} = this.state
    return (
      <PortfolioContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <Navbar>
              <NavbarTopContainer>
                <NavbarContainer>
                  <NavLogo
                    src="https://res.cloudinary.com/sunil013/image/upload/v1666716727/logo_1_3x_gctvsy.png"
                    alt="logo"
                  />
                  <NavLinksContainer>
                    <NavItemsContainer>
                      <NavItem darkTheme={darkTheme}>Home</NavItem>
                      <NavItem darkTheme={darkTheme}>About</NavItem>
                      <NavItem darkTheme={darkTheme}>Technologies</NavItem>
                      <NavItem darkTheme={darkTheme}>Projects</NavItem>
                      <NavItem darkTheme={darkTheme}>Contact</NavItem>
                    </NavItemsContainer>
                    <NavIconsContainer>
                      <NavIconItem darkTheme={darkTheme}>
                        <AiOutlineTwitter size={26} />
                      </NavIconItem>
                      <NavIconItem darkTheme={darkTheme}>
                        <FaLinkedinIn size={22} />
                      </NavIconItem>
                      <NavIconItem darkTheme={darkTheme}>
                        <FiGithub size={24} />
                      </NavIconItem>
                    </NavIconsContainer>
                  </NavLinksContainer>
                  {showNavbar ? (
                    <NavMobileMenuButton
                      type="button"
                      onClick={this.onClickCloseBar}
                    >
                      <IoMdClose className="menu-icon" />
                    </NavMobileMenuButton>
                  ) : (
                    <NavMobileMenuButton
                      type="button"
                      onClick={this.onClickOpenBar}
                    >
                      <CgPlayList className="menu-icon" />
                    </NavMobileMenuButton>
                  )}
                </NavbarContainer>
                {showNavbar && (
                  <NavMobileContainer className="mobile-nav-show">
                    <NavMobileListContainer className="mobile-bar-list">
                      <Link to="/" className="nav-tab-links">
                        <NavMobileItem>Home</NavMobileItem>
                      </Link>
                      <Link to="/about" className="nav-tab-links">
                        <NavMobileItem>About</NavMobileItem>
                      </Link>
                      <Link to="/technologies" className="nav-tab-links">
                        <NavMobileItem>Technologies</NavMobileItem>
                      </Link>
                      <Link to="/projects" className="nav-tab-links">
                        <NavMobileItem>Projects</NavMobileItem>
                      </Link>
                      <Link to="/contact" className="nav-tab-links">
                        <NavMobileItem>Contact</NavMobileItem>
                      </Link>
                    </NavMobileListContainer>
                    <NavIconsContainer>
                      <NavMobileIcons>
                        <AiOutlineTwitter size={26} />
                      </NavMobileIcons>
                      <NavMobileIcons>
                        <FaLinkedinIn size={22} />
                      </NavMobileIcons>
                      <NavMobileIcons>
                        <FiGithub size={24} />
                      </NavMobileIcons>
                    </NavIconsContainer>
                  </NavMobileContainer>
                )}
              </NavbarTopContainer>
            </Navbar>
          )
        }}
      </PortfolioContext.Consumer>
      /* <Navbar>
        <NavbarTopContainer>
          <NavbarContainer>
            <NavLogo
              src="https://res.cloudinary.com/sunil013/image/upload/v1666716727/logo_1_3x_gctvsy.png"
              alt="logo"
            />
            <NavLinksContainer>
              <NavItemsContainer>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Technologies</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Contact</NavItem>
              </NavItemsContainer>
              <NavIconsContainer>
                <NavIconItem>
                  <AiOutlineTwitter size={26} />
                </NavIconItem>
                <NavIconItem>
                  <FaLinkedinIn size={22} />
                </NavIconItem>
                <NavIconItem>
                  <FiGithub size={24} />
                </NavIconItem>
              </NavIconsContainer>
            </NavLinksContainer>
            {showNavbar ? (
              <NavMobileMenuButton type="button" onClick={this.onClickCloseBar}>
                <IoMdClose className="menu-icon" />
              </NavMobileMenuButton>
            ) : (
              <NavMobileMenuButton type="button" onClick={this.onClickOpenBar}>
                <CgPlayList className="menu-icon" />
              </NavMobileMenuButton>
            )}
          </NavbarContainer>
          {showNavbar && (
            <NavMobileContainer className="mobile-nav-show">
              <NavMobileListContainer className="mobile-bar-list">
                <Link to="/" className="nav-tab-links">
                  <NavMobileItem>Home</NavMobileItem>
                </Link>
                <Link to="/about" className="nav-tab-links">
                  <NavMobileItem>About</NavMobileItem>
                </Link>
                <Link to="/technologies" className="nav-tab-links">
                  <NavMobileItem>Technologies</NavMobileItem>
                </Link>
                <Link to="/projects" className="nav-tab-links">
                  <NavMobileItem>Projects</NavMobileItem>
                </Link>
                <Link to="/contact" className="nav-tab-links">
                  <NavMobileItem>Contact</NavMobileItem>
                </Link>
              </NavMobileListContainer>
              <NavIconsContainer>
                <NavMobileIcons>
                  <AiOutlineTwitter size={26} />
                </NavMobileIcons>
                <NavMobileIcons>
                  <FaLinkedinIn size={22} />
                </NavMobileIcons>
                <NavMobileIcons>
                  <FiGithub size={24} />
                </NavMobileIcons>
              </NavIconsContainer>
            </NavMobileContainer>
          )}
        </NavbarTopContainer>
      </Navbar> */
    )
  }
}

export default Header
