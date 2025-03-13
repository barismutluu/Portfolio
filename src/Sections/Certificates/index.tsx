import "./styles.css";

import FullStack_Backend from "../../Assets/certificates/fullstack_backend.png";
import FullStack from "../../Assets/certificates/fullstack.png";
import BackEnd from "../../Assets/certificates/back-End.png";
import CertificateCard from "../../Components/CertificateCard";
import { Fade } from "react-awesome-reveal";
import ddos from "../../Assets/certificates/ddos.png";
import agility from "../../Assets/certificates/agility.png";
import veri from "../../Assets/certificates/veri.png";
import TestOtomasyon from "../../Assets/certificates/test-Otomasyon.png";
import python from "../../Assets/certificates/python.png";
import test from "../../Assets/certificates/test.png";

type certificate = {
  certificate: string;
  from: string;
  name: string;
  link: string;
};

const certificates: certificate[] = [
  {
    certificate: FullStack_Backend,
    from: "Techcareer.net",
    name: "Full Stack Back-End Development with Docker Bootcamp",
    link: "https://certificates.techcareer.net/tr/verify/91973906354070",
  },
  {
    certificate: FullStack,
    from: "Patika.Dev",
    name: "FullStack Web Development Bootcamp",
    link: "http://cohorts.patika.dev/certificates/svbSlqxc",
  },
  {
    certificate: BackEnd,
    from: "Patika.Dev",
    name: "Back-End Web Development Bootcamp",
    link: "https://cohorts.patika.dev/certificates/a7cb2abd",
  },
  {
    certificate: test,
    from: "BilgeAdam Teknoloji",
    name: "Applied Test Expertise Training",
    link: "#",
  },
  {
    certificate: TestOtomasyon,
    from: "Patika.Dev",
    name: "A101 Test Otomasyon Practicum",
    link: "https://verified.sertifier.com/en/verify/08087139776674/",
  },
  {
    certificate: ddos,
    from: "BTK Akademi",
    name: "DoS / DDoS Attacks and Protection",
    link: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=dx1hAxOaP9",
  },
  {
    certificate: agility,
    from: "Proludus",
    name: "Agility ve Scrum 101",
    link: "#",
  },
  {
    certificate: veri,
    from: "Proludus",
    name: "Data Storytelling",
    link: "#",
  },
  {
    certificate: python,
    from: "University of Michigan",
    name: "Programming for Everybody (Getting Started with Python)",
    link: "https://www.coursera.org/account/accomplishments/verify/UCGXSRSGHUU6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
  },
  
];

function Certificates() {
  return (
    <Fade cascade triggerOnce>
      <div
        className=" relative py-36 flex flex-wrap justify-center items-center mx-auto"
        id="certificates"
      >
        <h1 className="w-screen text-center text-4xl text-shadows-100 font-bold pb-3">
          Certificates
        </h1>
        <div className="flex flex-row justify-start items-start container overflow-y-hidden pt-48 cards-div pl-40">
          {certificates.map((item, key) => {
            return (
              <CertificateCard
                key={key}
                certificate={item.certificate}
                from={item.from}
                name={item.name}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

export default Certificates;
