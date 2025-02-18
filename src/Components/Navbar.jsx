import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end p-10 pb-0">
      <div className="container flex flex-row-reverse w-[100%]">

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        <ul
          className={`md:flex md:flex-row md:gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:text-black md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 transition-transform transform ${
            isOpen ? "translate-x-0 flex flex-col items-center" : "-translate-x-full md:translate-x-0"
          }`}
        >
          {[
            { name: "About", link: "#about" },
            { name: "Work", link: "#work" },
            { name: "Projects", link: "#projects" },
            { name: "Resume", link: "https://drive.google.com/uc?export=download&id=1j3x-izusGBhSwhEYNNswyP31IwKmPCF4" },
            { name: "Contact", link: "#contactme", special: true },
          ].map((item, index) => (
            <li
              key={index}
              className={`text-xl p-2 rounded-[25px] w-[100px] text-[#ffffff] text-center ${
                item.special ? "bg-[#f3904f] text-white" : "hover:bg-[#ffffff] hover:text-black"
              }`}
            >
              <a href={item.link} className={isOpen ? "text-[#000000]" : ""}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;