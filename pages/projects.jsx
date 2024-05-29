import { useState } from "react";
import { PageTitle, ProjectCard, ProjectList, SeoMetadata } from "@/components";
import { Github, ListFilter, ExternalLink, Info, Star, Blocks } from "lucide-react";
import Link from "next/link";
import { projectPageData, site_metadata } from "@/constants";

const renderProjects = projectType => {
    const { web_projects, android_projects, misc_projects } = projectPageData;

    if (projectType === "web") {
        return web_projects?.map(project => <ProjectCard key={project.id} project={project} />);
    } else if (projectType === "android") {
        return android_projects?.map(project => <ProjectList key={project.id} {...project} />);
    } else {
        return misc_projects?.map(project => <ProjectList key={project.id} {...project} />);
    }
};

const Project = () => {
    const [projectType, setProjectType] = useState("web");

    return (
        <section className="sm:max-w-3xl">
            <SeoMetadata title={site_metadata?.project?.title} desc={site_metadata?.project?.desc} />

            <PageTitle title="My notable projects" effect="purple" />
            <p className="info my-4">{projectPageData?.intro}</p>

            <div className="my-10">
                <p className="mb-2 flex items-center gap-1 font-medium font-bold text-black dark:text-white">
                  <span className="text-purple-600 dark:text-teal-600"><ListFilter size={18} /></span>
                  Filter Project
                </p>
                <div className="mb-8 flex justify-between items-center">
                    <select
                        onChange={e => setProjectType(e.target.value)}
                        className="w-full px-3 py-2 rounded-md outline-0 bg-[#f8f8ff] border-[1px] border-gray-200 dark:bg-gray-700/70 dark:border-transparent"
                        name=""
                        id=""
                    >
                        <option value="web">Web App</option>
                        <option value="android">Android App</option>
                        <option value="misc">Miscellanious</option>
                    </select>
                </div>

                <h2 className="sub_heading flex items-center gap-4">
                    <span className="text-purple-500 dark:text-teal-500">
                        <Star />
                    </span>
                    Favourite projects
                </h2>

                <ul className="mt-4 space-y-4 md:grid md:grid-cols-2 md:items-stretch md:space-y-0 md:gap-6">
                    {renderProjects(projectType)}
                </ul>

                <Link className="mt-10 inline-block" href={projectPageData?.more_projects || ""} target="_blank">
                    <button className="btn_link" type="button">
                        <Blocks size={20} />
                        Browse more projects
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Project;
