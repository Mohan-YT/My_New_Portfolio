

import styled ,{keyframes} from "styled-components";

const dotAnimation = keyframes`
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-5px); }
  100% { opacity: 0; transform: translateY(0); }
`;

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    span {
      animation: ${dotAnimation} 1.5s infinite;
     }

    span:nth-child(1) { animation-delay: 0s; }
    span:nth-child(2) { animation-delay: 0.2s; }
    span:nth-child(3) { animation-delay: 0.4s; }
  }
`;

const Loading = () => {
  return (
    <Box>
      <h1>Please wait<span>.</span><span>.</span><span>.</span></h1>
    </Box>
  );
};

export default Loading;