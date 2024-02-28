// Skillset.tsx

import React from "react";

const Skillset: React.FC = () => {
  const skillSetData: string[] = [
    "React Js",
    "Javascript",
    "Java",
    "Flutter",
    "React Native",
    "Typescript",
    "HTML",
    "CSS",
    "Sass",
    "Tailwind",
    "Bootstrap",
    "Node Js",
    "MySQL",
    "MongoDB",
    "AWS codecommit",
    "Github / GitLab"
  ];
  return (
    <section id="skillset" className="p-2">
      <h2 className="text-[26px]">Skillset</h2>
      <p className="text-[20px] mt-[2px] ">
        <div className="flex flex-wrap">
          {skillSetData.map((data) => (
            <div className="w-1/2">
              <p className="border-collapse border border-[#3bc9f3] p-1 text-center">
                {data}
              </p>
            </div>
          ))}
        </div>
      </p>
    </section>
  );
};

export default Skillset;
