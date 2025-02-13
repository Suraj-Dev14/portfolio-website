import { useState, useEffect } from "react";

function About() {
  const texts = [
    "I am Suraj",
    "I am a Web Developer",
    "I am a Data Engineer",
    "I am a Problem Solver",
    "I am an ML Enthusiast",
  ];
  const colors = [
    "text-red-400",
    "text-blue-400",
    "text-green-400",
    "text-yellow-400",
    "text-purple-400",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 50);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        setColorIndex((prev) => (prev + 1) % colors.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }

    setText(currentText.substring(0, charIndex));
  }, [charIndex, index, isDeleting]);

  return (
    <>
      <section id="about" className="h-auto flex flex-col md:flex-row items-center md:items-start p-6 md:p-10">
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold p-1">
            Hi there!👋
          </h1>
          <h1
            className={`text-3xl md:text-5xl lg:text-6xl font-bold p-1 transition-all duration-500 ${colors[colorIndex]}`}
          >
            {text}
            <span className="animate-blink">|</span>
          </h1>
          <p className="text-lg md:text-xl p-1 mt-4 leading-8">
            I am a Computer Engineering undergraduate passionate about AI,
            machine learning, and data analytics. With hands-on experience in
            Python, C++, databases, and analytics tools, I develop intelligent,
            scalable solutions to solve real-world challenges.
          </p>
          <p className="text-lg md:text-xl p-1 mt-4 leading-8">
            My internships in data science and image processing have
            strengthened my ability to work with cutting-edge technologies and
            optimize decision-making through data-driven insights. I am eager to
            innovate, collaborate, and contribute to impactful projects in the
            tech industry. Let’s connect and build the future together!
          </p>
          <a
            href="https://www.linkedin.com/in/suraj-gaikwad-10028b249"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl text-blue-500 mt-4"
          >
            Let's Connect!
          </a>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="src/assets/Photo2.png"
            alt="My Image"
            className="w-full md:w-[450px] lg:w-[600px] h-auto rounded-[25px] object-cover"
          />
        </div>
      </section>
    </>
  );
}

export default About;
