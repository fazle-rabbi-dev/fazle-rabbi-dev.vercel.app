import React from "react";
import { X } from "lucide-react";

export const ProjectModal = ({ toggleModal, project }) => {
  return (
    <div className="project_modal_container">
      <div className="project_modal">
        <button
          onClick={toggleModal}
          className="absolute right-4 top-2 bg-light_3 text-dark_2 rounded p-1"
        >
          <X size={20} />
        </button>
        <div className="mt-4 mb-2">
          <h3 className="sub_heading">
            🔴 Unveiling the Journey of Building <span className="gradient_text">{project?.details?.title}</span>
          </h3>
          <p className="info text-sm">{project?.details?.desc || ""}</p>
        </div>

        {/* Feature */}
        <div className="mt-4">
          <h4 className="sub_heading">Features</h4>
          <ul className="">
            {project?.details?.features.map(feature => (
              <li key={feature} className="ml-2 my-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
