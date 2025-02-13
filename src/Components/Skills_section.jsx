function Skill_section({ skill_logo_path, skill_name}) {

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <img
        src={skill_logo_path}
        alt="Skill Image"
        className="w-[50px] sm:w-[60px] md:w-[80px] h-[50px] sm:h-[60px] md:h-[80px] rounded-full border-none bg-[#ffffff] object-cover"
      />
      <h2 className="text-sm sm:text-lg md:text-xl text-center">{skill_name}</h2>
    </div>
  );
}

export default Skill_section;
