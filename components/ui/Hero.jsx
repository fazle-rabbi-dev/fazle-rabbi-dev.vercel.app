import {
  Twitter,
  Linkedin,
  Github,
  FileText,
  Download,
  ChevronsRight,
  MoveUpRight,
  MousePointerClick
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { homePageData } from "@/constants";
import Swal from "sweetalert2";

export const Hero = () => {
  const heroAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-70%)" }
  });

  return (
    <section className="relative min-h-screen md:flex md:justify-center md:items-center md:max-w-3xl">
      {/* Gradient Effect */}
      <div className="gradient_effect"></div>

      <animated.div className="transition duration-100 " style={heroAnimation}>
        <div className="md:flex md:gap-2 md:flex-row-reverse md:justify-between">
          <div className="w-32 md:w-auto">
            <Image
              src={homePageData?.photo?.url || ""}
              width={300}
              height={300}
              alt={homePageData?.photo?.alt || "Fazle Rabbi"}
            />
          </div>

          <div className="md:flex-1">
            <span className="leading-7  flex items-center gap-2 font-light">
              Hello there
              <Image
                src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                width={20}
                height={20}
                alt="Waving hand"
              />
            </span>
            <h1 className="text-black text-2xl font-ranade-bold dark:text-white">
              {homePageData?.tagline2}
            </h1>

            <p className="my-6 leading-7 font-light">
              I am Fazle Rabbi a passionate MERN stack{" "}
              <span className="font-bold">web developer</span> from Bangladesh,
              deeply in love with coding and exploring various tech domains.
            </p>

            {/* My Status  */}
            <div className="my-4 text-sm font-light">
              <p className="my-2 flex gap-2">
                <ChevronsRight size={17} />
                <span>
                  {" "}
                  Im currently building{" "}
                  <span className="gradient_text font-bold">
                    Full Stack Projects.
                  </span>
                </span>
              </p>
              <p className="my-2 flex gap-2">
                <ChevronsRight size={17} />
                <span>
                  Im on a mission to become a{" "}
                  <span className="gradient_text font-bold">full stack</span>{" "}
                  developer.
                </span>
              </p>
              <p className="my-2 flex gap-2">
                <ChevronsRight size={17} />
                <span>I bring life to designs through lines of code.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Socials & CTA */}
        <div className="ml-6 md:m-0 md:flex md:gap-4 md:items-center">
          <div className="mt-8 md:m-0 flex items-center gap-4">
            {homePageData?.socials?.map((platform, index) => (
              <Link target="_blank" key={index} href={platform.link || ""}>
                <button className="social_icon" type="button">
                  {platform.name === "twitter" ? (
                    <Twitter />
                  ) : platform.name === "linkedin" ? (
                    <Linkedin />
                  ) : (
                    <Github />
                  )}
                </button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap mt-10 md:m-0">
            <Link href={homePageData?.resumelink || ""} target="_blank">
              <button className="resume_btn" type="button">
                <Download size={20} />
                Download Resume
              </button>
            </Link>
            <Link href="/projects">
              <button className="work_btn" type="button">
                <MousePointerClick size={16} />
                My Work
              </button>
            </Link>
          </div>
        </div>
      </animated.div>
    </section>
  );
};
