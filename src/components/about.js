import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"

const Wrapper = styled.div`
  margin-top: -0.5rem;
  padding-bottom: 4rem;
  background: linear-gradient(to right, #a4a4a4, #9dbdd3);
`

const About = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 4rem 0;
`
const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 1rem;
  border: 3px solid #3e484c;
`
const Content = styled.div`
  width: 70%;
  margin-left: auto;
`
const Text = styled.p`
  font-weight: 500;
  line-height: 1.75rem;
  letter-spacing: 1px;
  align-items: center;
`
const Heading = styled.h2`
  font-family: Abril Fatface;
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`
const HeadingInner = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  margin: 0;
`
const HR = styled.hr`
  width: 30%;
  margin: 1rem auto;
  background-color: #3e484c;
`
const Profiles = styled.div`
  position: relative;
  margin-top: 4rem;
`
const ProfileBorder = styled.div`
  position: absolute;
  width: 75%;
  height: 95%;
  top: 60px;
  left: 50px;
  border: 3px solid #3e484c;
`
const SliderDiv = styled.div`
  position: relative;
`
const SliderOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 98.1%;
  z-index: 1;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
`
const SliderText = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  z-index: 2;
`

const AboutPage = ({ img, photos, names }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const carousel = names.map((profile, index) => {
    let x = photos.shift()
    profile.image = x

    return (
      <SliderDiv key={index}>
        <Img fixed={profile.image} style={{ height: "400px" }}></Img>
        <SliderText>
          {profile.name}, {profile.age} years
          <br />
          {profile.degree}
        </SliderText>
        <SliderOverlay />
      </SliderDiv>
    )
  })

  return (
    <Wrapper>
      <About id="about">
        <Heading>Who we are</Heading>
        <Block>
          <Img
            fixed={img}
            style={{
              position: "absolute",
              left: "-1.5rem",
              bottom: "1.716rem",
              filter: "grayscale(1)",
              transform: "scale(1.15)",
            }}
          ></Img>
          <Content>
            <HeadingInner>The Project</HeadingInner>
            <HR />
            <Text>
              Wonder Woman covers the most relevant and interesting programs
              created for developing the intelligent and professional level for
              women in Kazakhstan, and also attracts the attention of their
              contributions to various areas of activity. More and more social
              projects illustrate how is important the education and knowledge
              in the twenty first century. The project is based on practical
              knowledge from successful entrepreneurs, business experts and
              influencers in the field of information technology, leadership,
              financial management, art, psychology etc. The Wonder Woman will
              illustrate the collaboration of digital commerce, project
              management tools and highly important theme, that can help women
              to develop themselves.
            </Text>
          </Content>
        </Block>
        <Profiles>
          <span></span>
          <ProfileBorder>
            <HeadingInner style={{ paddingTop: "1rem" }}>Our team</HeadingInner>
            <HR />
            <Text
              style={{
                width: "86%",
                padding: "1rem",
                lineHeight: "1.25rem",
              }}
            >
              The given project was created by Global E-Business Master’s degree
              students from University of Lille. Aisha and Gulbanu have a
              brilliant educational and professional background in Project
              Management and Business Administration.Taoufik is a great expert
              in Economics and Business. Master’s degree students shared with
              each other the idea of development the educational and
              motivational sectors between women in Kazakhstan. <br />
              The project Wonder Woman will be a start of new opportunities for
              everyone, who wants to develop skills and share knowledge with
              others.
            </Text>
          </ProfileBorder>
          <Slider
            {...settings}
            style={{ width: "300px", height: "400px", marginLeft: "auto" }}
          >
            {carousel}
          </Slider>
        </Profiles>
      </About>
    </Wrapper>
  )
}
export default AboutPage
