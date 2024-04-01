import styled from "styled-components";
import { useRef, useState } from "react";
import exPic from "./images/zodiac.jpg";

// import Swiper from "swiper";
// import { SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";


import { register } from "swiper/element/bundle";
register();

const Container = styled.div`
  width: 70%;
  margin: 50px auto;
`;
Container.displayName = "Container";

const DropDownMenu = styled.select`
  width: 100%;
  height: 35px;
  text-align: center;
  border-radius: 8px;
  font-size: 20px;
  @media screen and (max-width: 1279px) {
    margin: 0 auto;
  }
`;
DropDownMenu.displayName = "DropDownMenu";

const DropDownOptGroup = styled.optgroup`
  color: #a5b3b4;
`;

const DropDownOption = styled.option`
  color: #000;
  text-align: center;
`;
const InfoContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  margin-top: 50px;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const InfoImgDiv = styled.div`
  height: 100%;
  width: 50%;
  overflow: hidden;
  background-color: beige;
  @media screen and (max-width: 1279px) {
    width: auto;
    height: 180px;
  }
`;
const InfoImg = styled.div`
  width: 960px;
  height: 100%;
  background-image: url(${exPic});
  background-size: 100% 100%;
`;
const InfoDetailContainer = styled.div`
  width: 50%;
  text-align: center;
  padding-top: 50px;
  @media screen and (max-width: 1279px) {
    width: auto;
  }
`;
const InfoDetailStarTitle = styled.h2`
  color: #000;
  font-size: 32px;
  margin: 10px 0;
`;
const InfoDetailStarDate = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;
const InfoDetailStarColorDiv = styled.div`
  margin: 15px auto 30px;
  width: 85px;
  display: flex;
`;
const InfoDetailStarColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  background-color: #dc8bcf;
`;
const InfoDetailStarColorText = styled.p`
  font-size: 18px;
  margin-left: 4px;
`;
const InfoDetailStarProductTitle = styled.h2`
  font-size: 20px;
  margin-top: 60px;
`;
const InfoDetailStarProductText = styled.p`
  font-size: 12px;
  margin-top: 20px;
  padding: 0 30px;
`;
const CTAButton = styled.button`
  margin-top: 30%;
  width: 80%;
  height: 30px;
  background-color: #948181;
  color: #fff;
  @media screen and (max-width: 1279px) {
    margin: 5% 0 10%;
  }
`;
const MoreProductDivider = styled.div`
  height: 1px;
  background-color: #3f3a3a;
  margin: 50px 0 15px;
`;
const MoreProductIntro = styled.h2`
  color: #8b572a;
  margin-bottom: 20px;
`;
const MoreProductContainer = styled.div`
  width: 60%;
  background-color: beige;
  height: 250px;
  display: flex;
  margin: 0 auto;
  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;
const MoreProductAnchor = styled.a`
  cursor: pointer;
`;
const MoreProductDiv = styled.div`
  height: 100%;
  background-color: burlywood;
  flex-grow: 1;
`;
const MoreProductImgDiv = styled.div`
  width: 100%;
  height: 60%;
  background-color: beige;
`;
const MoreProductImg = styled.img`
  width: 100%;
  height: 100%;
`;
const MoreProductColors = styled.ul`
  display: flex;
  margin-top: 10px;
`;
const MoreProductColor = styled.li`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  border-radius: 50%;
  background-color: darkblue;
`;
const MoreProductTitle = styled.h3`
  color: #fff;
  margin: 10px 0 0 8px;
`;
const MoreProductPrice = styled.p`
  margin: 10px 0 0 8px;
  color: #fff;
`;




/* -------------------------------- component ------------------------------- */
const Color = () => {
  return (
    <>
      <Container>
        <DropDownMenu>
          <DropDownOptGroup label="fire">
            <DropDownOption>1</DropDownOption>
            <DropDownOption>2</DropDownOption>
            <DropDownOption>3</DropDownOption>
          </DropDownOptGroup>
          <DropDownOptGroup label="earth">
            <DropDownOption>4</DropDownOption>
            <DropDownOption>5</DropDownOption>
            <DropDownOption>6</DropDownOption>
          </DropDownOptGroup>
          <DropDownOptGroup label="water">
            <DropDownOption>7</DropDownOption>
            <DropDownOption>8</DropDownOption>
            <DropDownOption>9</DropDownOption>
          </DropDownOptGroup>
          <DropDownOptGroup label="wind">
            <DropDownOption>10</DropDownOption>
            <DropDownOption>11</DropDownOption>
            <DropDownOption>12</DropDownOption>
          </DropDownOptGroup>
        </DropDownMenu>
        <InfoContainer>
          <InfoImgDiv>
            <InfoImg />
          </InfoImgDiv>
          <InfoDetailContainer>
            <InfoDetailStarTitle>Leo</InfoDetailStarTitle>
            <InfoDetailStarDate>3/30</InfoDetailStarDate>
            <InfoDetailStarColorDiv>
              <InfoDetailStarColorDot></InfoDetailStarColorDot>
              <InfoDetailStarColorText>PINK</InfoDetailStarColorText>
            </InfoDetailStarColorDiv>
            <InfoDetailStarProductTitle>
              Product Name
            </InfoDetailStarProductTitle>
            <InfoDetailStarProductText>
              Lorem ipsum dolor sit amet consectetur. Vulputate facilisi sit non
              blandit sed in nunc. Neque et eget maecenas ac. Eu amet mauris non
              proin tristique. In orci nisi eget tempor malesuada maecenas.
              Lacus at sit non cursus maecenas laoreet sapien. A justo
              pellentesque massa ut lacus. Ac lacus massa orci mauris tristique
              tristique vulputate. Urna iaculis commodo suspendisse.
            </InfoDetailStarProductText>
            <CTAButton>CTA</CTAButton>
          </InfoDetailContainer>
        </InfoContainer>
        <MoreProductDivider />
        <MoreProductIntro>更多相似色產品</MoreProductIntro>
        <MoreProductContainer>
          <Swiper
            slidesPerView={3}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductColors>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                  </MoreProductColors>
                  <MoreProductTitle>小扇紋細織上衣</MoreProductTitle>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>

            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductColors>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                  </MoreProductColors>
                  <MoreProductTitle>小扇紋細織上衣</MoreProductTitle>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>

            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductColors>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                  </MoreProductColors>
                  <MoreProductTitle>小扇紋細織上衣</MoreProductTitle>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>

            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductColors>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                  </MoreProductColors>
                  <MoreProductTitle>小扇紋細織上衣</MoreProductTitle>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>

            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductColors>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                  </MoreProductColors>
                  <MoreProductTitle>小扇紋細織上衣</MoreProductTitle>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>

            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductColors>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                    <MoreProductColor></MoreProductColor>
                  </MoreProductColors>
                  <MoreProductTitle>小扇紋細織上衣</MoreProductTitle>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>
          </Swiper>
        </MoreProductContainer>
        
      </Container>
    </>
  );
};

export default Color;
