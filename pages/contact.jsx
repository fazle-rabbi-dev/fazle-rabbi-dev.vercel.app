import { PageTitle, ContactForm, SeoMetadata } from "@/components";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MailCheck,
  Mail,
  Send
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contactPageData, site_metadata } from "@/constants";

const Contact = () => {
  return (
    <section className="md:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.contact?.title}
        desc={site_metadata?.contact?.desc}
      />

      <PageTitle title="Get in touch" effect="purple" />

      <p className="info">{contactPageData?.intro}</p>

      <div className="my-10 md:flex md:gap-4 md:justify-between md:items-end">
        <ContactForm contactPageData={contactPageData} />
        <div className="mt-10 md:m-0 md:flex md:flex-col md:justify-between">
          <Image
            className="w-full dark:hidden"
            src="/images/get-in-touch.svg"
            width={800}
            height={400}
            alt="Get in touch"
          />
          <Image
            className="w-full hidden dark:block"
            src="/images/get-in-touch-dark.svg"
            width={800}
            height={400}
            alt="Get in touch"
          />
          <div className="my-4">
            <h2 className="sub_heading">Other Ways to Reach Me</h2>
            <ul className="flex gap-2 flex-wrap">
              <li className="flex gap-w">
                <span className="flex items-center gap-2">
                  <MailCheck size={18} />
                  Email:
                </span>
                <Link
                  className="alternative_contact"
                  href="mailto:fazlerabbidev@outlook.com"
                >
                  {contactPageData?.alternative?.email}
                </Link>
              </li>
              <li className="flex gap-w">
                <span className="flex items-center gap-2">
                  <Send size={18} />
                  Telegram:
                </span>
                <Link
                  className="alternative_contact"
                  href={contactPageData?.alternative?.telegram || ""}
                  target="_blank"
                >
                  Fazle Rabbi Dev
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Platform */}
      <div className="my-10">
        <h2 className="sub_heading">Follow Me</h2>
        <ul className="flex gap-2">
          {contactPageData?.socials?.map(platform => (
            <li key={platform.id} className="social_icon">
              <Link target="_blank" href={platform.link}>
                {platform.name === "Twitter" ? (
                  <Twitter />
                ) : platform.name === "Linkedin" ? (
                  <Linkedin />
                ) : platform.name === "Facebook" ? (
                  <Facebook />
                ) : platform.name === "Instagram" ? (
                  <Instagram />
                ) : (
                  <Github />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="info">
        <span className="bg-gray-200 shadow-2xl rounded p-1 dark:bg-dark_4 ">
          💡
        </span>
        <p>
          Looking forward to connecting with fellow enthusiasts and industry
          professionals!
        </p>
      </div>
    </section>
  );
};

export default Contact;
