import Link from "next/link";
import { Github, ExternalLink, Info, Star, Blocks } from "lucide-react";
import Image from "next/image";
import { ProjectModal } from "@/components";
import { useState } from "react";

// These for dynamic style
const badge = [
  "badge_react",
  "badge_tailwind",
  "badge_react_query",
  "badge_nextjs"
];

export const ProjectCard = ({ project }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(curr => !curr);
  };

  return (
    <li className="group project_card">
      <div onClick={toggleModal}>
        <div className="overflow-hidden">
          <Image
            className="w-full rounded-t-2xl transition duration-500 group-hover:scale-105"
            src={project?.cover}
            width={600}
            height={300}
            alt={project?.name}
          />
        </div>

        {/* Project Info */}
        <div className="p-4 relative">
          <div className="mb-2 border-b-[.7px] border-gray-700/20">
            <h3 className="text-xl font-ranade-bold">{project?.name}</h3>
            <div className="my-2 flex gap-2 flex-wrap">
              {project?.technologies?.map(tech => (
                <span key={tech.name} className={tech.style}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="project_card_gradient"></div>
            <p className="relative">{project?.desc}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <ul className="pb-4 pr-4 flex gap-4 justify-end items-center gap-2">
        <li className="">
          <Link target="_blank" href={project?.links?.github || ""}>
            <button
              className="cursor-pointer transition duration-300 hover:scale-125"
              type="button"
            >
              <Github size={23} />
            </button>
          </Link>
        </li>
        <li className="">
          <Link target="_blank" href={project?.links?.live || ""}>
            <button
              className="cursor-pointer transition duration-300 hover:scale-125"
              type="button"
            >
              <ExternalLink size={25} />
            </button>
          </Link>
        </li>

        <li>
          <button
            onClick={toggleModal}
            className="cursor-pointer transition duration-300 hover:scale-125"
            type="button"
          >
            <Info size={25} />
          </button>
        </li>
      </ul>

      {openModal && (
        <ProjectModal project={project} toggleModal={toggleModal} />
      )}
    </li>
  );
};
