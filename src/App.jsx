import NavBar from "./components/shared/NavBar";
import { useState, useEffect } from "react";
import { FaChevronDown, FaRegCopy} from "react-icons/fa6";
import Footer from "./components/shared/Footer.jsx";
import PrimaryPhoto from "./assets/PrimaryPhoto.png";
import Aos from "aos";
import "aos/dist/aos.css";
import PopUp from "./components/shared/PopUp.jsx";

function App() {
  const [currentText, setCurrentText] = useState("");
  
  const [inputValue, setInputValue] = useState("tobyceballos44@gmail.com");
  const [showPopup, setShowPopup] = useState(false);

  const copyMail = () => {
    const inputElement = document.createElement('input');
    inputElement.value = inputValue;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    setShowPopup(true);

    // Cierra el popup después de 2 segundos
    setTimeout(() => setShowPopup(false), 4000);
  };
  const texts = [
    "Fullstack Developer.",
    "Frontend Developer.",
    "Backend Developer.",
    "UX/UI Designer.",
  ];

  useEffect(() => {
    Aos.init();
    const typingSpeed = 50;
    const delayBetweenTexts = 500;

    const typeAndAppendToList = async () => {
      let fullText = "";

      for (let j = 0; j < texts.length; j++) {
        // Text building
        for (let i = 0; i < texts[j].length; i++) {
          fullText += texts[j][i];
          setCurrentText(fullText);
          await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        }

        // Insert line break
        if (j !== texts.length - 1) {
          fullText += "\n";
          setCurrentText(fullText);
        }

        // Wait to build the next text
        await new Promise((resolve) => setTimeout(resolve, delayBetweenTexts));
      }
    };

    // Iniciar la animación después de un breve retraso
    const timer = setTimeout(() => {
      typeAndAppendToList();
    }, 500);

    return () => {
      clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
    };
  }, []);

  const ProjectsCard =
    "flex flex-col justify-center hover:justify-end drop-shadow-md transition-all duration-300 projects__card bg-neutral-900 text-white p-4 rounded-lg hover:scale-105 shadow-md w-64 h-[60vh] border-2 border-orange-300";

  const skillsAnimation = "fade-up-left";
  const skillsStyles =
    "bg-neutral-700 shadow-lg  bg-opacity-50 py-1 px-2 m-1 text-center flex items-center text-slate-100 text-lg font-semibold rounded-md";
  return (
    <main className="relative">
      <NavBar />
      <section id="Home" className="relative z-10 h-screen">
        <div className="home__section items-center justify-center h-screen w-full mr-40">
          <img
            src={PrimaryPhoto}
            className="h-[40vh] w-[40vh] rounded-full mb-10 md:mb-0 md:mr-10"
          />
          <div className="flex flex-col lg:border-l-4 lg:border-l-orange-300 border-t-4 lg:border-t-0 border-t-orange-300 py-16 my-16 px-6 md:order-2">
            <h1 className="text-4xl text-center lg:text-left font-bold text-white lg:ml-14">
              Hi, I&apos;m Tobias
              <span className="text-orange-300 text-5xl">.</span>
            </h1>
            <p className="text-3xl text-center lg:text-left font-mono text-neutral-600 lg:ml-14  mt-2">
              <div style={{ whiteSpace: "pre-line" }}>{currentText}</div>
            </p>
          </div>
        </div>

        <a
          href="#AboutMe"
          className="hidden lg:block bottom-0 p-3 chevron__down absolute w-full text-slate-100 text-3xl transition duration-300"
        >
          <FaChevronDown className="w-full" />
        </a>
      </section>

      <section
        id="AboutMe"
        className="flex items-center h-screen max-h-screen w-full relative z-10 bg-neutral-800 bg-opacity-40 overflow-hidden"
      >
        <div className="flex flex-col text-slate-100 p-3">
          <h1
            data-aos="fade-down"
            data-aos-duration="6000"
            className="text-4xl border-b-2 border-b-orange-300 mx-[20%] py-1 md:py-2 text-center font-bold mb-6"
          >
            About Me<span className="text-orange-300 text-5xl">.</span>
          </h1>
          <p className="text-lg text-center text-neutral-300 font-mono py-3 flex flex-col md:flex-row justify-between w-[90%] ml-[5%] h-[65vh] gap-2">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="bg-neutral-800 bg-opacity-40 text-left flex flex-col justify-center border-2 border-orange-300 shadow-lg w-full md:w-[60%] px-8 py-4 overflow-y-scroll about__me__slider rounded-md"
            >
              <h3 className="text-3xl pb-2 text-orange-300">Get to know me!</h3>
              My name is Tobías Ceballos, I am 19 years old, I consider myself a
              passionate fullstack programmer. Combining creativity and
              technical skills to create innovative web development solutions. I
              stand out for my versatility and dedication to each project.
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="500"
              className=" text-left flex flex-col justify-center border-0 border-orange-300 w-full md:w-[40%] px-8 py-4 about__me__slider"
            >
              <h3 className="text-3xl pb-2 ml-1 text-orange-100">My skills</h3>
              <div className="flex flex-row flex-wrap">
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="800"
                  className={skillsStyles}
                >
                  HTML
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="900"
                  className={skillsStyles}
                >
                  CSS
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="1000"
                  className={skillsStyles}
                >
                  JavaScript
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="1100"
                  className={skillsStyles}
                >
                  React
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="1200"
                  className={skillsStyles}
                >
                  Vue.js
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="1300"
                  className={skillsStyles}
                >
                  Angular
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="1400"
                  className={skillsStyles}
                >
                  Git
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="100"
                  data-aos-delay="1500"
                  className={skillsStyles}
                >
                  Github
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="1600"
                  className={skillsStyles}
                >
                  Responsive Design
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="1700"
                  className={skillsStyles}
                >
                  Node.js
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="1800"
                  className={skillsStyles}
                >
                  Python
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="1900"
                  className={skillsStyles}
                >
                  SQL
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="2000"
                  className={skillsStyles}
                >
                  MongoDB
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="2100"
                  className={skillsStyles}
                >
                  GraphQL
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="2200"
                  className={skillsStyles}
                >
                  Webpack
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="2300"
                  className={skillsStyles}
                >
                  npm
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="2400"
                  className={skillsStyles}
                >
                  RESTful APIs
                </span>
                <span
                  data-aos={skillsAnimation}
                  data-aos-duration="200"
                  data-aos-delay="2500"
                  className={skillsStyles}
                >
                  Testing
                </span>
              </div>
            </div>
          </p>
        </div>

        <a
          href="#Projects"
          className="hidden lg:block bottom-0 p-3 chevron__down--invert absolute w-full text-slate-100 text-3xl transition duration-300"
        >
          <FaChevronDown className="w-full" />
        </a>
      </section>

      <section
        id="Projects"
        className="flex flex-col items-center justify-center h-screen w-full relative z-10 overflow-x-hidden p-2 bg-zinc-900 bg-opacity-40 overflow-y-hidden"
      >
        <h1
          data-aos="fade-down"
          data-aos-duration="6000"
          className="text-4xl border-b-2 text-slate-100 border-b-orange-300 mx-[20%] py-2 w-[30%] text-center font-bold mb-6"
        >
          Projects<span className="text-orange-300 text-5xl">.</span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="6500"
          data-aos-delay="500"
          className="flex flex-row items-center justify-center"
        >
          <div className="flex items-center justify-center space-x-2 p-1">
            <div id="about-me" className={ProjectsCard}>
              <h2 className="text-xl project__card__text text-center font-bold mb-2">
                TaTeTi
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-1">
            <div id="about-me" className={ProjectsCard}>
              <h2 className="text-xl project__card__text text-center font-bold mb-2">
                SellEase
              </h2>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-1">
            <div id="about-me" className={ProjectsCard}>
              <h2 className="text-xl project__card__text text-center font-bold mb-2">
                Dear Reader
              </h2>
            </div>
          </div>
        </div>
        <a
          href="#Contact"
          className="hidden lg:block bottom-0 p-3 chevron__down absolute w-full text-slate-100 text-3xl transition duration-300"
        >
          <FaChevronDown className="w-full" />
        </a>
      </section>

      <section
        id="Contact"
        className="relative flex flex-col justify-center items-center z-10 bg-neutral-800 bg-opacity-40 w-full"
      >
        <div className="w-2/3 p-3">
          <h1
            data-aos="fade-down"
            data-aos-duration="6000"
            className="text-2xl text-slate-200 text-left font-bold"
          >
            Let&apos;s reach out
            <span className="text-orange-300 text-2xl">!</span>
          </h1>
          <div className="flex">
            <input
              type="text"
              id="name"
              name="name"
              value={inputValue}
              readOnly
              className="w-full bg-neutral-50 bg-opacity-90 rounded-s-full border-b border-orange-300 focus:border-orange-500 text-base outline-none text-neutral-700 py-1 px-6 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button className="text-neutral-700 text-xl absolute top-1/2" onClick={copyMail}><FaRegCopy />
</button>
            <a href="mailto:tobyceballos44@gmail.com?subject=Contacto%20vía%20tobiasceballos.com&body=Hola%20Tobias,%0D%0A%0D%0AQuisiera%20ponerme%20en%20contacto%20contigo%20para%20discutir%20la%20posibilidad%20de%20contratar%20tus%20servicios.%0D%0A%0D%0AEspero%20tu%20respuesta.%0D%0A%0D%0ASaludos,%0D%0A[Tu%20Nombre]" className="flex text-white bg-orange-300 border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 hover:scale-105 rounded-e-full text-lg transition-all duration-300 ">
              Send
            </a>
          </div>
        </div>
      </section>{showPopup && <PopUp message="Copied"/>}
      <Footer />
    </main>
  );
}

export default App;
