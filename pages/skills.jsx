import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { PageTitle, SeoMetadata } from "@/components";
import { skillPageData, site_metadata } from "@/constants";
const { Proficient, Comfortable, others, intro } = skillPageData;

const Skills = () => {
  return (
    <section className="md:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.skill?.title}
        desc={site_metadata?.skill?.desc}
      />

      {/* Gradient Effect */}
      <div className="skill_page_gradient"></div>

      <PageTitle title="My technical expertise" effect="purple" />

      <p className="info">{intro || ""}</p>

      {/* Proficient With */}
      <div className="md:mt-10 md:flex md:gap-4">
        <div className="my-6 md:w-7/12">
          <h2 className="sub_heading text-center">Proficient with ⚡</h2>
          <ul className="mt-4 grid grid-cols-6 ">
            {Proficient?.map(skill => (
              <li
                key={skill.id}
                className="group flex flex-col justify-center items-center"
              >
                <Image
                  className={`${
                    ["Next.js", "Flask", "Expressjs"].includes(skill.name) &&
                    "dark:bg-light_2 dark:rounded-full"
                  } ${
                    skill.name === "Firebase" && "w-10 h-10"
                  } transition duration-500 hover:scale-125`}
                  src={`/images/${skill.icon}`}
                  width={40}
                  height={40}
                  alt={skill.name}
                />
                <span className="text_tiny font-light opacity-0 group-hover:opacity-100">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comfortable With */}
        <div className="my-6 md:flex-1">
          <h2 className="sub_heading text-center">Comfortable with 🛠️</h2>
          <ul className="mt-4 grid grid-cols-6">
            {Comfortable?.map(skill => (
              <li
                key={skill.id}
                className="group flex flex-col justify-center items-center"
              >
                <Image
                  className={`${skill.name === "Zustand" && "rounded-full"} ${
                    skill.name === "Nextauth.js" && "w-10 h-10"
                  } transition duration-500 hover:scale-125`}
                  src={`/images/${skill.icon}`}
                  width={40}
                  height={40}
                  alt={skill.name}
                />
                <span className="text_tiny font-light opacity-0 group-hover:opacity-100">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Have Strong Foundation */}
      <div className="my-6">
        <h2 className="sub_heading text-center">
          Have a strong foundation in 💪
        </h2>
        <ul className="mt-4 flex justify-center items-center flex-wrap gap-2">
          {others?.map(skill => (
            <li className="px-4 py-1 bg-gray-700/10 rounded shadow-2xl flex gap-2 items-center dark:bg-gray-800">
              <span>{skill.icon}</span>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      <Link className="mt-10 inline-block" href="/projects">
        <button className="btn_link" type="button">
          My projects
          <MoveUpRight size={18} />
        </button>
      </Link>
    </section>
  );
};

export default Skills;
