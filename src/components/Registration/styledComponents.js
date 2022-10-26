import styled from 'styled-components'

export const RegistrationSection = styled.div`
  background-color: #ffffff;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  max-width: 900px;
`
export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RegistrationImage = styled.img`
  width: 90%;
  max-width: 500px;
`
export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 39px;
  font-weight: 600;
  color: #475569;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 300px;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #7b8794;
  margin-bottom: 6px;
`
export const InputElement = styled.input`
  font-family: 'Roboto';
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: #cbd5e1 solid 1px;
  padding-left: 6px;
  margin-bottom: 26px;
  outline: none;
`
export const SelectElement = styled.select`
  font-family: 'Roboto';
  height: 35px;
  width: 100%;
  border-radius: 5px;
  border: #cbd5e1 solid 1px;
  padding-left: 6px;
  outline: none;
`

export const RegisterNowBtn = styled.button`
  width: 150px;
  height: 35px;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  outline: none;
  margin-top: 25px;
`
export const ErrorMsg = styled.p`
  font-family: Roboto;
  color: #ff0b37;
  font-weight: 500;
  font-size: 15px;
`
