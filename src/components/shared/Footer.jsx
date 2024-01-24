import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  return (
    <footer className="px-16 bg-neutral-950 bg-opacity-70 text-slate-100">
      <div className="flex flex-col md:flex-row gap-3 justify-between mb-12 py-16">
        <div className="w-[40%]">
          <h3 className="text-slate-100 font-semibold text-4xl mb-5">
            Tobias Ceballos
          </h3>
          <span className="text-xl text-slate-200 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum rem
            nobis, optio corporis ratione commodi?
          </span>
        </div>
        <div className="w-[40%]">
          <h3 className="text-slate-100 font-semibold text-4xl mb-5">Social</h3>
          <ul className="flex gap-4 text-2xl">
            <li>
              <a href=""><FaInstagram /></a>
            </li>
            <li>
              <a href=""><FaLinkedinIn /></a>
            </li>
            <li>
              <a href=""><FaGithub /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center text-base p-10 mt-6 border-t-2 border-orange-300 font-thin">
        <span>© Copyright {currentYear}. Made by <strong>Tobias Ceballos</strong>.</span>
      </div>
    </footer>
  );
};

export default Footer;
