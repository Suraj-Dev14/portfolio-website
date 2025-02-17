import { useEffect, useRef } from "react";

function Project_done({ project_name, project_photo, project_description }) {
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={projectRef}
      className="projects flex flex-col lg:flex-row gap-5 mb-10 items-center border-2 border-[#808080] rounded-[25px] p-5"
    >
      <div className="w-full lg:w-[50%] flex items-center justify-center">
        <img
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[600px] h-auto rounded-[25px] object-cover"
          src={project_photo}
          alt="Project_photo"
        />
      </div>

      <div className="flex flex-col w-full lg:w-[50%] gap-3 mb-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          {project_name}
        </h1>
        <div className="pl-5 leading-8">
          <ul>
            {project_description.map((desc, i) => (
              <li key={i} className="list-disc text-lg md:text-xl">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project_done;