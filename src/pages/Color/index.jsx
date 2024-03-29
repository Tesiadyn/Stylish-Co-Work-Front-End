import styled from "styled-components";

const Container = styled.div`
  width: 50%;

  background-color: #f7f7f7;
  margin: 50px auto;
`;
Container.displayName = "Container";

const DropDownMenu = styled.select`
  width: 100%;
  height: 35px;
  text-align: center;
`;
DropDownMenu.displayName = "DropDownMenu";

const DropDownOption = styled.option`
  color: #000;
`;
const InfoContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: #d9d9d9;
  margin-top: 50px;
`;
const InfoImgDiv = styled.div`
  height: 100%;
  width: 50%;
  background-color: beige;
`;
const InfoImg = styled.img`
  width: 100%;
  height: 100%;
`;
const InfoDetailContainer = styled.div`
  width: 50%;
  text-align: center;
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
  padding: 0 10px;
`;
const CTAButton = styled.button`
  margin-top: 60px;
  width: 80%;
  height: 30px;
  background-color: #948181;
  color: #fff;
`;
const Color = () => {
  return (
    <>
      <Container>
        <DropDownMenu>
          <DropDownOption>1</DropDownOption>
          <DropDownOption>2</DropDownOption>
          <DropDownOption>3</DropDownOption>
          <DropDownOption>4</DropDownOption>
          <DropDownOption>5</DropDownOption>
          <DropDownOption>6</DropDownOption>
          <DropDownOption>7</DropDownOption>
          <DropDownOption>8</DropDownOption>
          <DropDownOption>9</DropDownOption>
          <DropDownOption>10</DropDownOption>
          <DropDownOption>11</DropDownOption>
          <DropDownOption>12</DropDownOption>
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
      </Container>
    </>
  );
};

export default Color;
