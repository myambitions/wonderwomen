import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

import videoUrl from "../video/main.mp4"
import gif1 from "../images/gif/1.gif"
import gif3 from "../images/gif/3.gif"
import gif4 from "../images/gif/4.gif"

const Wrapper = styled.div`
  padding: 4rem 0;
  background: linear-gradient(to left, #a4a4a4, #9dbdd3);
`
const ProductsDiv = styled.div`
  width: 90%;
  margin: auto;
`

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc((90% / 3) + (2rem)));
  grid-gap: 2rem;
  @media (max-width: 1368px) {
    grid-template-columns: repeat(3, calc((86% / 3) + (2rem)));
  }
`
const Card = styled.div`
  padding: 2rem;
  box-shadow: 0 0 6px 0px #3e484c;
  background-color: #fff;
  color: #3e484c;
  border-radius: 8px;
`
const HeadingSmall = styled.h4`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`
const CardContent = styled.div``
const CardDescription = styled.p`
  font-size: 1rem;
`
const VideoDiv = styled.div`
  display: flex !important;
  height: 420px;
  align-items: center;
`
const VideoEl = styled.video`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Img = styled.img`
  width: 100%;
  height: 267px;
  object-fit: cover;
`

const Products = () => {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Wrapper id="products">
      <ProductsDiv>
        <Heading>Products</Heading>
        <Cards>
          <Card>
            <HeadingSmall>Masterclass</HeadingSmall>
            <Slider {...settings}>
              <div>
                <CardContent>
                  <Img src={gif3} alt="" />
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, error?
                  </CardDescription>
                </CardContent>
              </div>
              <VideoDiv>
                <VideoEl src={videoUrl} autoPlay loop></VideoEl>
              </VideoDiv>
            </Slider>
          </Card>

          <Card>
            <HeadingSmall>Webinar</HeadingSmall>
            <Slider {...settings}>
              <div>
                <CardContent>
                  <Img src={gif1} alt="" />
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, error?
                  </CardDescription>
                </CardContent>
              </div>
              <VideoDiv>
                <VideoEl src={videoUrl} autoPlay loop></VideoEl>
              </VideoDiv>
            </Slider>
          </Card>

          <Card>
            <HeadingSmall>Articles</HeadingSmall>
            <Slider {...settings}>
              <div>
                <CardContent>
                  <Img src={gif4} alt="" />
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, error?
                  </CardDescription>
                </CardContent>
              </div>
              {/* <VideoDiv>
                <button>Read more</button>
              </VideoDiv> */}
            </Slider>
          </Card>
        </Cards>
      </ProductsDiv>
    </Wrapper>
  )
}

export default Products
