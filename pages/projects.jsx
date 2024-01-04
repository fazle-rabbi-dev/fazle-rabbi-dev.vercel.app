import { PageTitle, ProjectCard, SeoMetadata } from "@/components";
import { Github, ExternalLink, Info, Star, Blocks } from "lucide-react";
import Link from "next/link";
import { projectPageData, site_metadata } from "@/constants";

const Project = () => {
  return (
    <section className="md:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.project?.title}
        desc={site_metadata?.project?.desc}
      />

      <PageTitle title="My notable projects" effect="purple" />
      <p className="info my-4">{projectPageData?.intro}</p>

      <div className="my-10">
        <h2 className="sub_heading flex items-center gap-4">
          <span className="text-purple-500 dark:text-teal-500">
            <Star />
          </span>
          Favourite projects
        </h2>

        <ul className="mt-4 space-y-4 md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
          {projectPageData?.favourite_projects?.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>

        <Link
          className="mt-10 inline-block"
          href={projectPageData?.more_projects || ""}
          target="_blank"
        >
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
