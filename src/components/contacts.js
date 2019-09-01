import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 600px;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  top: 0;
  background-color: #000000bd;
  z-index: 1;
`
const Content = styled.div`
  position: relative;
  max-width: 960px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  z-index: 3;
`
const Item = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 32px;

  &:nth-child(5) {
    font-size: 96px;
    font-weight: 900;
    margin-top: 4rem;
  }
`
const ItemLink = styled.a`
  color: #fff;
  text-decoration: none;
`
const SocialDiv = styled.div`
  margin-left: auto;
`

const Contacts = ({ data, bg, icons }) => {
  return (
    <Wrapper id="contacts" background={bg.src}>
      <Content>
        <Item>
          <ItemLink href={`tel:${data.phone}`}>{data.phone}</ItemLink>
        </Item>
        <Item>{data.workingTime}</Item>
        <Item>{data.workingDays}</Item>
        <Item>
          <ItemLink href={`mailto:${data.email}`}>{data.email}</ItemLink>
        </Item>
        <Item>{data.town}</Item>
        {/* <SocialDiv>ItemLink</SocialDiv> */}
      </Content>
      <Overlay />
    </Wrapper>
  )
}

export default Contacts
