import { useDetails } from "../context/DetailsContext";
const GeneratePDF = () => {
  const { personalDetails, image, workDetails, educationDetails, skills } =
    useDetails();

  return (
    <section className="flex flex-col mt-5 w-full">
      <section className="p-10 flex flex-col ">
        <div className="flex flex-col ">
          <span className="uppercase text-3xl font-bold">
            {personalDetails.firstname
              ? personalDetails.firstname
              : "First Name"}{" "}
            {personalDetails.surname ? personalDetails.surname : "Last Name"}
          </span>
          <span className="uppercase span-[12px] ml-2 mt-2">
            {personalDetails.profession
              ? personalDetails.profession
              : "Profession"}
          </span>
          <span className="ml-2 span-justify  mt-3 leading-5 span-gray-700 span-sm">
            Motivated and accomplished professional dedicated to excellence in
            [profession]. Bringing a wealth of experience and expertise in [key
            skills]. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Doloremque, iste!
          </span>
        </div>
        <div className="mt-4 flex flex-row justify-between gap-1">
          <div className="flex flex-col">
            <img
              src={image ? image : "https://via.placeholder.com/150"}
              alt=""
              className="w-32 h-32"
            />
            <div className="flex flex-col leading-5 mt-2 ">
              <span className="font-bold mt-3">Contact</span>
              <hr />
              <span className="flex flex-col w-full">
                <span className="font-semibold span-[14px]">Profession:</span>
                <span className="span-sm ml-5">
                  {personalDetails.profession
                    ? personalDetails.profession
                    : "Profession Name"}
                </span>
              </span>
              <span className="flex flex-col ">
                <span className="font-semibold span-[14px]">City:</span>
                <span className="span-sm ml-5">
                  {personalDetails.city ? personalDetails.city : "City Name"}
                </span>
              </span>
              <span className="flex flex-col">
                <span className="font-semibold span-[14px]">Country:</span>
                <span className="span-sm ml-5">
                  {personalDetails.country
                    ? personalDetails.country
                    : "Country Name"}
                </span>
              </span>
              <span className="flex flex-col">
                <span className="font-semibold span-[14px]">Zip:</span>
                <span className="span-sm ml-5">
                  {personalDetails.zip ? personalDetails.zip : "postal code"}
                </span>
              </span>
              <span className="flex flex-col">
                <span className="font-semibold span-[14px]">Phone:</span>
                <span className="span-sm ml-5">
                  {personalDetails.phone
                    ? personalDetails.phone
                    : "Phone Number"}
                </span>
              </span>
              <span className="flex flex-col max-w-[80%]">
                <span className="font-semibold span-[14px]">Email:</span>
                <span className="span-sm ml-5">
                  {personalDetails.email ? personalDetails.email : "Email"}
                </span>
              </span>
              <hr />
              <div className="flex flex-col mt-3">
                <span className="font-bold">Skills</span>
                <ul>
                  {skills &&
                    skills.map((skill, index) => (
                      <li key={index}>
                        <span className="span-sm ml-5"> - {skill}</span>
                      </li>
                    ))}
                  {skills.length === 0 && (
                    <span className="span-sm ml-5"> - No skills added</span>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col border-l-2 w-[70%]">
            <div className="flex flex-col p-2">
              <span className="span-2xl uppercase font-bold">Work History</span>
              <hr />
              <span className="mt-2 span-sm span-gray-700">
                {workDetails.details
                  ? workDetails.details
                  : "Summarize your work exprerience in two to 3 lines "}
              </span>
              <div className="flex flex-row mt-2 justify-between items-center">
                <span className="font-bold">
                  {workDetails.company ? workDetails.company : "Company Name"}
                </span>
              </div>
              <div className="flex flex-row justify-between items-center mt-2 p-2 bg-slate-200 gap-2 ">
                <span className="font-bold span-[14px]">
                  {workDetails.jobtitle ? workDetails.jobtitle : "Job Title"}
                </span>
                <span className="span-sm">
                  {workDetails.startingYear
                    ? workDetails.startingYear
                    : "Starting Year"}{" "}
                  {"-"}{" "}
                  {workDetails.endingYear
                    ? workDetails.endingYear
                    : "Ending Year"}
                </span>
              </div>
              <div className="mt-10">
                <span className="span-2xl uppercase font-bold">
                  Education
                  <hr />
                </span>
                <div className="flex flex-col mt-4 bg-slate-200 p-2">
                  <span className="font-semibold span-[14px]">
                    {educationDetails.degree
                      ? educationDetails.degree
                      : "Degree"}{" "}
                    :{" "}
                    <span>
                      {educationDetails.fieldofstudy
                        ? educationDetails.fieldofstudy
                        : "Field of Study"}
                    </span>
                  </span>
                  <span className="italic span-[13px] span-gray-700 ml-auto">
                    {educationDetails.institutionName
                      ? educationDetails.institutionName
                      : "Institution"}
                  </span>
                  <span className="italic span-[13px] span-gray-700 ml-auto">
                    {educationDetails.graduationEndMonth
                      ? educationDetails.graduationEndMonth
                      : "Month"}{" "}
                    {educationDetails.graduationEndYear
                      ? educationDetails.graduationEndYear
                      : "Year"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GeneratePDF;
