import Particles from 'react-tsparticles';

const ParticlesBkg = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },

          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          }
        },
        detectRetina: true
      }}
    />
  );
};
export default ParticlesBkg;
