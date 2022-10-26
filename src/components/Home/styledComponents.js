import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #ffffff;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeImage = styled.img`
  width: 80%;
  max-width: 500px;
  margin-top: 40px;
`
export const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NotRegisteredHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 500;
  color: #334155;
  margin: 0px;
`
export const NotRegisteredText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #475569;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  width: 110px;
  height: 32px;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`
export const RegisteredName = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: bold;
  color: #2563eb;
  margin: 0px;
`
export const RegisteredTopic = styled.p`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  color: #334155;
  margin: 0px;
`
