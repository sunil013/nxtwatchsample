import {Link} from 'react-router-dom'
import Header from '../Header'
import RegistrationContext from '../../context/RegistrationContext'
import {
  HomeContainer,
  HomeImage,
  HomeTextContainer,
  NotRegisteredHeading,
  NotRegisteredText,
  RegisterButton,
  RegisteredName,
  RegisteredTopic,
} from './styledComponents'

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

const Home = () => {
  const loadNameAndTopic = () => (
    <RegistrationContext.Consumer>
      {value => {
        const {registered, name, topic} = value
        const topicName = topicsList.filter(item => item.id === topic)
        return (
          <HomeTextContainer>
            {registered ? (
              <>
                <RegisteredName>Hello {name}</RegisteredName>
                <RegisteredTopic>
                  Welcome to {topicName[0].displayText}
                </RegisteredTopic>
              </>
            ) : (
              <>
                <NotRegisteredHeading>Welcome to Meetup</NotRegisteredHeading>
                <NotRegisteredText>
                  Please register for the topic
                </NotRegisteredText>
                <Link to="/register">
                  <RegisterButton type="button">Register</RegisterButton>
                </Link>
              </>
            )}
          </HomeTextContainer>
          /* <HomeTextContainer>
              <NotRegisteredHeading>Welcome to Meetup</NotRegisteredHeading>
              <NotRegisteredText>
                Please register for the topic
              </NotRegisteredText>
              <RegisterButton>Register</RegisterButton>
            </HomeTextContainer>
            <HomeContainer>
              <RegisteredName>Hello {name}</RegisteredName>
              <RegisteredTopic>Welcome to {topic}</RegisteredTopic>
            </HomeContainer> */
        )
      }}
    </RegistrationContext.Consumer>
  )
  return (
    <>
      <Header />
      <HomeContainer>
        {loadNameAndTopic()}
        <HomeImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </HomeContainer>
    </>
  )
}

export default Home
