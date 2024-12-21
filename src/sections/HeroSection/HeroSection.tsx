import "./HeroSection.scss"
import gem from "../../assets/images/gem-textured.png"

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="logo">WE AIN'T PLASTIC</div>
        <img
          src={gem}
          alt="Black Image"
          className="hero-image"
        />
      </div>
    </>
  );
};

export default HeroSection;
