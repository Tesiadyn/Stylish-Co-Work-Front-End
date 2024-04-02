import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

import { register } from "swiper/element/bundle";
register();

const Container = styled.div`
  &:after {
    content: "";
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto 50px;
  padding-top: 50px;
`;

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
const MotionInfoContainer = motion(InfoContainer);

const InfoImgDiv = styled.div`
  height: 100%;
  width: 40%;
  overflow: hidden;
  background-color: beige;
  border-radius: 8px;
  margin-top: 50px;
  @media screen and (max-width: 1279px) {
    width: auto;
    overflow: visible;
    height: 400px;
    margin-top: 200px;
  }
`;
const InfoImg = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1279px) {
    height: 100%;
  }
`;
const InfoDetailContainer = styled.div`
  color: #565656;
  width: 60%;
  text-align: center;
  padding-top: 50px;
  @media screen and (max-width: 1279px) {
    width: auto;
  }
`;
const InfoDetailStarTitle = styled.h2`
  font-size: 32px;
  margin: 10px 0;
`;
const InfoDetailStarDate = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;
const InfoDetailStarColorDiv = styled.div`
  margin: 15px auto 20px;
  width: 150px;
  display: flex;
  justify-content: center;
`;
const InfoDetailStarColorDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(160, 160, 160, 0.9);
`;
const InfoDetailStarColorText = styled.p`
  font-size: 18px;
  margin-left: 4px;
`;
const InfoDetailStarColorStory = styled.p`
  font-size: 14px;
`;
const InfoDetailStarProductTitle = styled.h2`
  font-size: 36px;
  margin-top: 90px;
  @media screen and (max-width: 1279px) {
    margin-top: 40px;
  }
`;
const InfoDetailStarProductText = styled.p`
  font-size: 14px;
  margin-top: 20px;
  padding: 0 30px;
`;
const CTAButton = styled.button`
  margin-top: 20%;
  width: 80%;
  height: 35px;
  background-color: #2c2c2c;
  color: #f7f7f7;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(185, 183, 189, 0.4);
  @media screen and (max-width: 1279px) {
    margin: 5% 0 10%;
  }
`;
const MotionCtaButton = motion(CTAButton);

const MoreProductDivider = styled.div`
  height: 1px;
  background-color: #cfcfcf;
  margin: 50px 0 15px;
`;
const MoreProductIntro = styled.h2`
  color: #8b572a;
  margin: 30px 0;
  text-align: center;
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
const MoreProductId = styled.p`
  color: #f1f1f1;
  margin: 10px 0 0 8px;
  font-size: 12px;
`;
const MoreProductTitle = styled.h3`
  color: #fff;
  margin: 10px 0 0 8px;
  font-size: 20px;
`;
const MoreProductPrice = styled.p`
  margin: 10px 0 0 8px;
  color: #fff;
  font-weight: 600;
`;

/* -------------------------------- function -------------------------------- */

/* -------------------------------- component ------------------------------- */
const Color = () => {
  const [zodiacData, setZodiacData] = useState(null);
  const [selectedZodiacId, setSelectedZodiacId] = useState(null);
  const [selectedZodiacData, setSelectedZodiacData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    fetch("https://zackawesome.net/api/1.0/zodiac")
      .then((res) => res.json())
      .then((data) => {
        setZodiacData(data);
        setIsLoading(false);
        const leoZodiac = data.find((zodiac) => zodiac.zodiacZh === "獅子座");
        if (leoZodiac) {
          setSelectedZodiacId(leoZodiac.zodiacId);
          setBgColor(`#${leoZodiac.colorHex}`);
        }
      })
      .catch((err) => {
        console.error("Error when fetching", err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (zodiacData) {
      const zodiac = zodiacData.find(
        (zodiac) => zodiac.zodiacId === selectedZodiacId
      );
      if (zodiac) {
        setSelectedZodiacData({
          name: zodiac.zodiacZh,
          colorName: zodiac.colorName,
          colorHex: zodiac.colorHex,
          description: zodiac.description,
          productImg: zodiac.product.main_image,
          productId: zodiac.product.id,
          productTitle: zodiac.product.title,
          productStory: zodiac.product.story,
        });
        setBgColor(`#${zodiac.colorHex}`);
      }
    }
  }, [selectedZodiacId, zodiacData]);

  const today = new Date();
  const dayString = today.toLocaleDateString("zh-CN", {
    month: "long",
    day: "numeric",
  });

  const handleZodiacChange = (e) => {
    const zodiacName = e.target.value;
    const selectedZodiac = zodiacData.find(
      (zodiac) => zodiac.zodiacZh === zodiacName
    );
    console.log(selectedZodiac);
    if (selectedZodiac) {
      setSelectedZodiacId(selectedZodiac.zodiacId);
    }
  };

  function hexToRGBA(hex, opacity) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  const elementOrder = ["火象星座", "土象星座", "風象星座", "水象星座"];
  const groupedData = zodiacData?.reduce((acc, zodiac) => {
    const element = zodiac.zodiacElement;
    if (!acc[element]) {
      acc[element] = [];
    }
    acc[element].push(zodiac);
    return acc;
  }, {});

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Container
      style={{
        backgroundColor: hexToRGBA(selectedZodiacData?.colorHex ?? "", 0.08),
      }}
    >
      <Wrapper>
        <DropDownMenu
          style={{
            backgroundColor: hexToRGBA(
              selectedZodiacData?.colorHex ?? "",
              0.08
            ),
          }}
          onChange={(e) => {
            handleZodiacChange(e);
          }}
        >
          {elementOrder.map((element) =>
            groupedData[element] ? (
              <DropDownOptGroup label={element} key={element}>
                {groupedData[element].map((zodiac) => (
                  <DropDownOption value={zodiac.zodiacZh} key={zodiac.zodiacId}>
                    {zodiac.zodiacZh}
                  </DropDownOption>
                ))}
              </DropDownOptGroup>
            ) : null
          )}
        </DropDownMenu>

        <MotionInfoContainer
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <InfoImgDiv>
            <InfoImg src={selectedZodiacData?.productImg} />
          </InfoImgDiv>
          <InfoDetailContainer>
            <InfoDetailStarTitle>
              {selectedZodiacData?.name}
            </InfoDetailStarTitle>
            <InfoDetailStarDate>{dayString}</InfoDetailStarDate>
            <InfoDetailStarColorDiv>
              <InfoDetailStarColorDot
                style={{ backgroundColor: `#${selectedZodiacData?.colorHex}` }}
              ></InfoDetailStarColorDot>
              <InfoDetailStarColorText>
                {selectedZodiacData?.colorName}
              </InfoDetailStarColorText>
            </InfoDetailStarColorDiv>
            <InfoDetailStarColorStory>
              {selectedZodiacData?.description}
            </InfoDetailStarColorStory>
            <InfoDetailStarProductTitle>
              {selectedZodiacData?.productTitle}
            </InfoDetailStarProductTitle>

            <a href={`/products/${selectedZodiacData?.productId} `}>
              <MotionCtaButton
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                前往購買
              </MotionCtaButton>
            </a>
          </InfoDetailContainer>
        </MotionInfoContainer>
        <MoreProductDivider />
        <MoreProductIntro>更多相似色產品</MoreProductIntro>
        <MoreProductContainer>
          <Swiper
            slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <MoreProductAnchor>
                <MoreProductDiv>
                  <MoreProductImgDiv>
                    <MoreProductImg />
                  </MoreProductImgDiv>
                  <MoreProductTitle>小扇紋細織上衣1</MoreProductTitle>
                  <MoreProductId>123775888</MoreProductId>
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
                  <MoreProductTitle>小扇紋細織上衣2</MoreProductTitle>
                  <MoreProductId>123775888</MoreProductId>
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
                  <MoreProductTitle>小扇紋細織上衣3</MoreProductTitle>
                  <MoreProductId>123775888</MoreProductId>
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
                  <MoreProductTitle>小扇紋細織上衣4</MoreProductTitle>
                  <MoreProductId>123775888</MoreProductId>
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
                  <MoreProductTitle>小扇紋細織上衣5</MoreProductTitle>
                  <MoreProductId>123775888</MoreProductId>
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
                  <MoreProductTitle>小扇紋細織上衣6</MoreProductTitle>
                  <MoreProductId>123775888</MoreProductId>
                  <MoreProductPrice>NT. 1299</MoreProductPrice>
                </MoreProductDiv>
              </MoreProductAnchor>
            </SwiperSlide>
          </Swiper>
        </MoreProductContainer>
      </Wrapper>
    </Container>
  );
};

export default Color;
