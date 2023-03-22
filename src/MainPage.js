import styled from "styled-components";
import Publishing from "./Publishing";

const Bg = styled.div`
  background: #fff;
  color: #000;
`;

const MainPage = () => {
  return (
    <Bg>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg">
          <text
            x="0"
            y="70"
            font-family="'Brush Script MT', cursive"
            font-size="50"
            fill="#F40000"
          >
            Junghoon
          </text>
        </svg>
      </h1>
      <Publishing />
    </Bg>
  );
};

export default MainPage;
