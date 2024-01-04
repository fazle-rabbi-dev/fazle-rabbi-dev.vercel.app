import Image from "next/image";
import { PageTitle, SeoMetadata } from "@/components";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { aboutPageData, site_metadata } from "@/constants";


const About = () => {
  return (
    <section className="md:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.about?.title}
        desc={site_metadata?.about?.desc}
      />
      
      <PageTitle title="About fazle rabbi" effect="purple" />
      <div className="">
        {/* Intro */}
        <p className="info dark:bg-transparent dark:p-4 dark:border-l-[.5px] dark:border-teal-400/40 dark:rounded">
          <Image src="/me.png" width={100} height={100} alt="Fazle Rabbi" />
          Hello, I'm <span className="font-bold">Fazle Rabbi</span>,
          {" "}
          {aboutPageData?.about_1}
          <br />
          <br />
          As part of my next plan, I aim to strengthen my web development skills
          by continuing to build impactful full-stack{" "}
          <Link className="link" href="/projects">
            projects
          </Link>
          .
        </p>
      </div>

      <div className="my-10">
        <h2 className="sub_heading">What I Love 😍</h2>
        <p className="info">{aboutPageData?.what_i_love}</p>
      </div>

      <div className="my-2">
        <h2 className="sub_heading">My Hobbies 🎯</h2>
        <p className="info">{aboutPageData?.my_hobbies}</p>
      </div>

      <div className="my-10">
        <h2 className="sub_heading">Apps I use daily 📱</h2>
        <p className="info">{aboutPageData?.apps_i_use}</p>
      </div>

      <div className="my-10">
        <h2 className="sub_heading">Fun fact 🤩</h2>
        <p className="info">
          I code on <span className="gradient_text">Android</span> due to the
          unavailability of a PC! using{" "}
          <Link
            target="_blank"
            href="https://modyolo.com/acode-powerful-code-editor.html"
            className="link"
          >
            Acode
          </Link>
          , a feature-rich code editor that provides a VS Code-like experience.
          For my terminal needs, I rely on
          <Link
            target="_blank"
            href="https://github.com/termux/termux-app"
            className="link"
          >
            Termux
          </Link>
          , and for console functionality, I use{" "}
          <Link
            target="_blank"
            href="https://github.com/liriliri/eruda"
            className="link"
          >
            eruda
          </Link>
          . Notably, this <span className="gradient_text">portfolio</span> is
          crafted entirely on Android using Acode and Termux.
        </p>
      </div>

      <div className="my-10">
        <h2 className="sub_heading">My web dev journey 🚀</h2>
        <p className="info">
          In the pursuit of my passion for technology, I initially delved into
          the world of <span className="gradient_text">hacking</span>, driven by
          a genuine interest in cybersecurity and ethical hacking. However, my
          journey took a transformative turn when I discovered the vast realm of
          web development. Guided by a web development roadmap, invaluable tips,
          and tricks shared by fellow developers on{" "}
          <span className="gradient_text">Instagram</span>, I embarked on this
          exciting path. My learning journey crystallized through tutorials on
          YouTube, notably from the channel{" "}
          <span className="gradient_text">Anisul Islam</span>, and various other
          enriching sources. As I honed my skills, I transitioned into a MERN
          stack developer, embracing the power of JavaScript in crafting dynamic
          and robust web applications.
        </p>
      </div>

      <Link className="inline-block" href="/skills">
        <button className="btn_link" type="button">
          My expertise
          <MoveUpRight size={18} />
        </button>
      </Link>
    </section>
  );
};

export default About;
