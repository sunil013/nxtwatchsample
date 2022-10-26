import Header from '../Header'
import RegistrationContext from '../../context/RegistrationContext'
import {
  RegistrationSection,
  RegistrationContainer,
  ImageContainer,
  RegistrationImage,
  FormContainer,
  FormHeading,
  Form,
  LabelElement,
  InputElement,
  SelectElement,
  RegisterNowBtn,
  ErrorMsg,
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

const Registration = () => (
  <RegistrationContext.Consumer>
    {value => {
      const {
        name,
        showError,
        onChangeName,
        onChangeTopic,
        onClickRegister,
      } = value
      const onClickName = event => {
        onChangeName(event)
      }
      const onClickTopic = event => {
        onChangeTopic(event)
      }
      const onSubmitForm = event => {
        onClickRegister(event)
      }

      return (
        <>
          <Header />
          <RegistrationSection>
            <RegistrationContainer>
              <ImageContainer>
                <RegistrationImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </ImageContainer>
              <FormContainer>
                <FormHeading>Let us join</FormHeading>
                <Form onSubmit={onSubmitForm}>
                  <LabelElement htmlFor="name">NAME</LabelElement>
                  <InputElement
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={onClickName}
                  />
                  <LabelElement htmlFor="topics">TOPICS</LabelElement>
                  <SelectElement id="topics" onChange={onClickTopic}>
                    {topicsList.map(item => (
                      <option value={item.id} key={item.id}>
                        {item.displayText}
                      </option>
                    ))}
                  </SelectElement>
                  <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
                  {showError && <ErrorMsg>Please enter your name</ErrorMsg>}
                </Form>
              </FormContainer>
            </RegistrationContainer>
          </RegistrationSection>
        </>
      )
    }}
  </RegistrationContext.Consumer>
)

export default Registration
