function About() {
  return (
    <>
      <div className="h-screen flex flex-row">
        <div className="w-1/2 p-10 flex flex-col gap-3">
          <h1 className="text-8xl font-bold p-1">Hi there! 👋</h1>
          <h1 className="text-8xl font-bold p-1">I'm Suraj</h1>
          <p className="text-xl p-1 mt-[10px] leading-9">
            I am a Computer Engineering undergraduate passionate about AI,
            machine learning, and data analytics. With hands-on experience in
            Python, C++, databases, and analytics tools, I develop intelligent,
            scalable solutions to solve real-world challenges.
          </p>
          <p className="text-xl p-1 mt-[10px] leading-9">
            My internships in data science and image processing have strengthened my ability to work with
            cutting-edge technologies and optimize decision-making through
            data-driven insights. I am eager to innovate, collaborate, and
            contribute to impactful projects in the tech industry. Let’s connect
            and build the future together!
          </p>
          <a href="https://www.linkedin.com/in/suraj-gaikwad-10028b249" target="_blank"><span className="text-lg p-1 text-[#0000FF]">Let's Connect!</span></a>
        </div>
        <div className="p-10 w-1/2 flex justify-end">
          <img
            src="src\assets\Photo.jpeg"
            alt="My Image"
            className="image h-[700px] w-[600px] rounded-[25px] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default About;
