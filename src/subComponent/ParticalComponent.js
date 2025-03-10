
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";
import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0; /* Ensures it's behind everything */
`;

export default function ParticalComponent({ theme }) {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particleConfig = theme === "light" ? configDark : configLight;

    return (
        <Box>
            <Particles
                id="backgroundParticles" // Unique ID
                init={particlesInit}
                options={particleConfig}
                style={{ position: "absolute", width: "100%", height: "100%" }}
            />
        </Box>
    );
}
