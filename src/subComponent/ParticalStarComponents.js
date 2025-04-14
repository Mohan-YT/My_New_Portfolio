
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import configStars from "../config/particlesjs-config-star.json";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0; /* Higher than background but lower than text */
`;

export default function ParticalStarComponent() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Box>
            <Particles 
                id="skillsParticles"  // Unique ID
                init={particlesInit}
                options={configStars}
                style={{ position: "absolute", width: "75%", height: "70%" }}
            />
        </Box>
    );
}
