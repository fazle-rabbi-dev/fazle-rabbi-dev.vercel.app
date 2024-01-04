import { PageTitle } from "@/components";
import Image from "next/image";
import { BlogCard, SeoMetadata } from "@/components";
import Link from "next/link";
import { blogPageData, site_metadata } from "@/constants";
import { Home } from "lucide-react"

const BlogPage = () => {
  return (
    <section className="w-full md:max-w-3xl">
      <SeoMetadata
        title={site_metadata?.blog?.title}
        desc={site_metadata?.blog?.desc}
      />

      <PageTitle title="My blogs" effect="purple" />

      <div className="my-6">
        <h2 className="sub_heading">I write blogs on ✍️</h2>
        <div className="flex items-center gap-2 flex-wrap">
          {blogPageData?.blogPlatforms?.map(platform => (
            <Link
              target="_blank"
              href={platform.link}
              className="blog_platform"
            >
              <Image src={`images/${platform.icon}`} width={20} height={20} />
              {platform.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="sub_heading">Latest blogs 🎉</h2>
        {blogPageData?.blogs?.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      
    <Link className="mt-6 inline-block" href="/">
        <button className="btn_link" type="button">
          Go to home
          <Home size={18} />
        </button>
      </Link>
    </section>
  );
};

export default BlogPage;
