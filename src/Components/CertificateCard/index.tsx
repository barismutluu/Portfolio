import "./styles.css";
import Tilt from "react-parallax-tilt";
// import circle from "../../Assests/wallpapers/circle-scatter-haikei-certificates1.svg";

type CertificateCardProps = {
  certificate: string;
  name: string;
  from: string;
  link: string;
};

function CertificateCard({
  certificate,
  name,
  from,
  link,
}: CertificateCardProps) {
  return (
    <div className={`w-96 min-w relative cer-card`}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="">
          <Tilt className="parallax " tiltAxis="y">
            <div className="blury bg-shadows-600 hover:bg-shadows-200 transition-all duration-300 border-similar-300 border-2 relative">
              <img src={certificate} alt="" className="p-6 w-72" />
              <div className="w-72">
                <h3 className="text-center text-xl font-bold font-serif text-white mb-6">
                  {from}
                </h3>
                <h3 className="text-center text-xl font-bold font-serif text-white mb-6">
                  {name}
                </h3>
              </div>
            </div>
          </Tilt>
        </div>
      </a>
    </div>
  );
}

export default CertificateCard;
