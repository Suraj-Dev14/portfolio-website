import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Particles failed to initialize:", error);
      }
    };

    initializeParticles();
  }, []);

  useEffect(() => {
    console.log("Particle Init Status:", init);
  }, [init]);

  const options = useMemo(
    () => ({
      background: { color: { value: "#000000" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.3, width: 1 },
        move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1, straight: false },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: ["circle"] },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? <Particles id={props.id} options={options} /> : <p>Loading particles...</p>;
};

export default ParticlesComponent;