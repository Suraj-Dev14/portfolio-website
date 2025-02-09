function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-menu h-16 flex items-center p-10">
          <ul className="nav-list flex flex-row w-full justify-end gap-15">
            <li className="nav-item text-xl text-black p-2 rounded-[25px] w-[100px] text-center">
              <a href="#about">About</a>
            </li>
            <li className="nav-item text-xl text-black p-2 rounded-[25px] w-[100px] text-center">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-item text-xl text-black p-2 rounded-[25px] w-[100px] text-center">
              <a href="#resume">Resume</a>
            </li>
            <li className="nav-item text-xl bg-[#0000FF] text-white p-2 rounded-[25px] w-[100px] text-center">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
