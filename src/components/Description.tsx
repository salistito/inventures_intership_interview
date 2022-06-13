import React from 'react'
import styled from 'styled-components'

function Description() {
  return (
    <DescriptionContainer>
      <h1>💊</h1>
      <h2>Revisa tus compras</h2>
      <p>Agrega al carro si necesitas reponer</p>
    </DescriptionContainer>
  )
}

export default Description

const DescriptionContainer = styled.div`
  align-items: center;
  h1{
    font-size: 40px;
    text-align: center;
    color: #414046;
    margin: 15px 0;
  }
  h2{
      font-weight: bold;
      font-size: 19px;
      text-align: center;
      /* identical to box height */
      letter-spacing: 0.15px;
      color: #414046;
      margin: 5px 0;
  }
  p{
    font-weight: 400;
    font-size: 16px;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.16px;
    color: #414046;
    margin: 0 0 25px 0;
  }
`;