import React from 'react'
import styled from 'styled-components'


const MemberContainer = styled.div`

  
  background-color: black;
  width: 30vw;
  margin: auto;
  margin-top: 20px;
  box-shadow: 3px 3px 10px 1px #ccc;
  border-radius: 10px;

`



export default function Team(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <MemberContainer>

      <h2>Name: {details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>

    </MemberContainer>
  )
}