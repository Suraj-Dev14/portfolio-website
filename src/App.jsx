import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Worked_company from "./Components/Worked_company";
import Skill_section from "./Components/Skills_section";
import work_experience from "./assets/Data/Work_experience";
import Skill_data from "./assets/Data/Skills_data";
import Project_done from "./Components/Project_done";
import Projects_data from "./assets/Data/Project_done";
import Contectme from "./Components/Contact_me";
import Footer from "./Components/Footer";
import ParticlesComponent from "./Components/Particles";

function App() {
  return (
    <>
      <ParticlesComponent id="particles"/>
      <div className="w-full text-white min-h-screen overflow-y-auto"> 
        <Navbar />
        <About />
        <div id="work" className="flex flex-col md:flex-row p-6 md:p-10">
          <div className="w-full md:w-2/3 max-h-[250vh] min-h-[30vh] overflow-y-auto">
            <h1 className="text-[#808080] text-center text-4xl md:text-5xl pb-5 font-bold">
              Working History
            </h1>
            {work_experience.map((work, index) => (
              <Worked_company key={index} {...work} />
            ))}
          </div>

          <div className="w-full md:w-1/3 max-h-[250vh] min-h-[30vh] overflow-y-auto">
            <h1 className="text-[#808080] text-center text-4xl md:text-5xl pb-5 font-bold">
              Technical Skills
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 justify-center min-h-[30vh] max-h-[250vh] overflow-y-auto border-2 border-[#808080] w-full p-5 rounded-[25px]">
              {Skill_data.map(
                (skill, index) => (
                  <Skill_section key={index} {...skill} />
                )
              )}
            </div>
          </div>
        </div>

        <div id="projects" className="p-6 md:p-10 pt-5">
          <h1 className="text-[#808080] text-5xl md:text-7xl lg:text-9xl pb-10 font-bold text-center">
            Projects
          </h1>
          <div className="flex flex-col gap-5">
            {Projects_data.map((project, index) => (
              <Project_done key={index} {...project} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 w-full max-w-screen-lg mx-auto p-6 md:p-10">
          <Contectme />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;