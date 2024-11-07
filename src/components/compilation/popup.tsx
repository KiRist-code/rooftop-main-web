import styled from "styled-components";

const Pop_up_bg = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Pop_up = styled.div`
  position: absolute;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 15px;
  width: 600px;
  height: 400px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.2); /*x y 번짐 색상*/
`;

const Pop_up_info = () => {
  return <></>;
};

export { Pop_up, Pop_up_bg, Pop_up_info };
