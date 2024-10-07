import Illus from "../../Components/Illus";
import About from "../../Components/About";
import blob from "../../Assets/wallpapers/blob-haikei-hero.svg";

function Hero() {
  return (
    <div
      className="flex flex-wrap md:pt-24 xl:pt-0 pt-0 justify-center items-center gap-12 min-h-screen w-screen"
      id="home"
    >
      <img src={blob} alt="blob" className="right-0 top-0 absolute" />
      <About />
      <Illus />
      <p className="w-screen px-10 mt-12 text-center text-xl relative lg:bottom-20 bottom-12 text-shadows-100 font-bold">
        Let's explore the intersection of engineering and web development as I
        build innovative solutions for an engaging online world.
      </p>
    </div>
  );
}

export default Hero;
