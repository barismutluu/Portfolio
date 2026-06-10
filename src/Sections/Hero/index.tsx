import About from "../../Components/About";
import Illus from "../../Components/Illus";
import blob from "../../Assets/wallpapers/blob-haikei-hero.svg";

function Hero() {
  return (
    <section
      className="flex flex-wrap md:pt-24 xl:pt-0 pt-0 justify-center items-center gap-12 min-h-screen w-screen"
      id="home"
    >
      <img src={blob} alt="" aria-hidden="true" className="right-0 top-0 absolute" />
      <About />
      <Illus />
      <p className="w-screen px-10 mt-12 text-center text-xl relative lg:bottom-20 bottom-12 text-shadows-100 font-bold">
        I build maintainable software solutions with a focus on backend APIs,
        real business workflows and reliable engineering practices.
      </p>
    </section>
  );
}

export default Hero;
