import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundImg = styled.img`
  width: 90%;
  max-width: 360px;
  margin-bottom: 15px;
`
export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  color: #475569;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const NotFoundDescription = styled.p`
  font-family: Roboto;
  color: #64748b;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
