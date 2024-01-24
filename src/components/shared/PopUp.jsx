import { LuCopyCheck } from "react-icons/lu";

const PopUp = ({ message }) => (
    <div
    data-aos="fade-up"
    data-aos-duration="1000" className="fixed inset-0 flex items-end justify-center p-4">
    <div className="bg-white border rounded-full py-2 px-5 shadow-md transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-75">
      <p className="text-center text-2xl flex">{message}<LuCopyCheck/></p>
      </div>
    </div>
  );

export default PopUp 