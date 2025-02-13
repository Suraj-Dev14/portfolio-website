function Worked_company({ company_logo_path, job_role, company_name, job_duration, job_description }) {
  return (
    <div className="flex flex-col border-2 border-[#808080] w-full sm:w-[95%] p-3 sm:p-5 rounded-[25px] gap-2 mb-5 min-h-[50px] max-h-[450px]">
      
      <img
        src={company_logo_path}
        alt="company_logo"
        className="h-[40px] sm:h-[50px] w-[40px] sm:w-[50px] object-cover rounded-full border-2 border-[#ffffff]"
      />

      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{job_role}</h1>

      <div className="flex flex-wrap gap-2 items-center text-sm sm:text-base">
        <h1>{company_name}</h1>
        <hr className="border border-[#808080] h-[15px] align-center"/>
        <h2>{job_duration}</h2>
      </div>

      <div className="pl-3 sm:pl-5">
        <ul className="list-disc text-sm sm:text-base">
          {job_description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Worked_company;