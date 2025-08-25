export default function RadiationBall () {
  const rippleStyles = `
    .ripple-container {
      position: relative;
      width: 10px;
      height: 10px;
    }
    .main-circle {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      background: #fbb917;
      border-radius: 50%;
      z-index: 2;
    }
    .ripple {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border: 3px solid #fbb917;
      border-radius: 50%;
      animation: rippleEffect 1s infinite ease-out;
      z-index: 1;
    }
    @keyframes rippleEffect {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{rippleStyles}</style>
      <div className="ripple-container">
        <span className="main-circle"></span>
        <span className="ripple"></span>
      </div>
    </>
  );
}