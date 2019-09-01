import React from "react"
import styled from "styled-components"

const VideoDiv = styled.div`
  position: relative;
`

const VideoEl = styled.video`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 80vh;
  z-index: 1;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.7) 30%,
    rgba(0, 0, 0, 0.7) 100%
  );
`

const Title = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  top: 0;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 1;
`

const Heading = styled.h1`
  font-family: Vidaloka;
  font-weight: 700;
  font-size: 96px;
  border-bottom: 2px solid #fff;
`

const Description = styled.p`
  font-family: Vidaloka;
  font-weight: 100;
  font-size: 36px;
`

const Video = ({ videoSrc, meta, ...props }) => (
  <VideoDiv>
    <VideoEl src={videoSrc} autoPlay loop></VideoEl>
    <Overlay />
    <Title>
      <Heading>{meta.title}</Heading>
      <Description>{meta.description}</Description>
    </Title>
  </VideoDiv>
)

export default Video
