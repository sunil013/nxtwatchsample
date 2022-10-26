import styled from 'styled-components'

export const Navbar = styled.nav`
  background-color: transparent;
  min-height: 10vh;
  //   background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
`
export const NavbarTopContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const NavLogo = styled.img`
  height: 40px;
`
export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  margin-right: 10px;
`
export const NavItem = styled.li`
  list-style-type: none;
  //   font-family: 'DM Sans';
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  margin-left: 20px;
  cursor: pointer;
  color: ${props => (props.darkTheme ? '#666666' : '#A7A7A7')};
  @media screen and (min-width: 1400px) {
    margin-left: 25px;
  }
`
export const NavIconsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const NavIconItem = styled.li`
  list-style-type: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${props => (props.darkTheme ? '#A7A7A7' : '#666666')};
  color: ${props => (props.darkTheme ? '#191919' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
`
export const NavMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavMobileListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NavMobileItem = styled.li`
  list-style-type: none;
  //   font-family: 'DM Sans';
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: #666666;
  cursor: pointer;
  margin-bottom: 10px;
`
export const NavMobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavMobileIcons = styled.li`
  list-style-type: none;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`
