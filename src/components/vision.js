import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  top: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`

const Text = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.75rem;
  z-index: 2;
`
const Quote = styled.span`
  font-family: PassionOne;
  font-size: 120px;
  transform: rotate(180deg);
  width: fit-content;
  margin-bottom: 72px !important;
`

const Content = styled.div`
  max-width: 960px;
  height: 60%;
  margin: auto;
`
const Heading = styled.h2`
  position: relative;
  padding-top: 4rem;
  margin-bottom: 0;
  font-family: Abril Fatface;
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
`

const Vision = ({ background }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Wrapper id="mission" background={background.src}>
      <Content>
        <Heading>Philosophy</Heading>
        <Slider {...settings} style={{ zIndex: 3 }}>
          <div>
            <Text>
              <Quote>"</Quote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              modi ex molestiae tempore. Rerum quae, nemo magni ad deleniti
              porro sed dicta repellendus error. Earum quod facere rem cumque
              voluptatem fugiat perferendis temporibus expedita. Atque quo
              veritatis facere beatae cum quidem laborum neque odio corrupti
              quibusdam, accusantium, molestiae hic dolorem consequatur
              molestias aperiam doloribus vitae debitis delectus tempora in
              recusandae.
            </Text>
          </div>
          <div>
            <Text>
              <Quote>"</Quote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              modi ex molestiae tempore. Rerum quae, nemo magni ad deleniti
              porro sed dicta repellendus error. Earum quod facere rem cumque
              voluptatem fugiat perferendis temporibus expedita. Atque quo
              veritatis facere beatae cum quidem laborum neque odio corrupti
              quibusdam, accusantium, molestiae hic dolorem consequatur
              molestias aperiam doloribus vitae debitis delectus tempora in
              recusandae.
            </Text>
          </div>
        </Slider>
      </Content>
      <Overlay />
    </Wrapper>
  )
}

export default Vision
