import styled from "styled-components";
import Header from "./Header";
import Carousel from "./Carousel";

const Bg = styled.div`
  background: #fff;
  color: #000;
  overflow-x: hidden;
`;

const MainPage = () => {
  return (
    <Bg>
      <Header />
      <Carousel />
    </Bg>
  );
};

export default MainPage;
