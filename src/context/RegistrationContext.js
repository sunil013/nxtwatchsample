import React from 'react'

const RegistrationContext = React.createContext({
  registered: false,
  name: '',
  topic: '',
  showError: false,
  onChangeName: () => {},
  onChangeTopic: () => {},
  onClickRegister: () => {},
  savedVideosList: [],
})

export default RegistrationContext
