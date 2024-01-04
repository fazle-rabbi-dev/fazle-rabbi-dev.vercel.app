import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export const BlogCard = ({ blog }) => {
  return (
    <div className="my-4 border-[.6px] border-gray-700/20 p-2 rounded-lg active:bg-purple-500/10 dark:active:bg-teal-500/10 dark:border-offwhite/30">
      <h2 className=" mb-2 dark:text-light_2">{blog?.title}</h2>
      <p className="text-sm text-gray-600 dark:text-offwhite">{blog?.desc}</p>
      <Link
        target="_blank"
        className="inline-block my-2"
        href={blog?.link || ""}
      >
        <button
          className="border-[1px] border-purple-500 text-purple-500 rounded px-4 py-1 flex items-center gap-2 transition duration-200 hover:bg-purple-500 hover:text-white dark:text-teal-500 dark:border-teal-500 dark:hover:bg-teal-500"
          type="button"
        >
          <span>Read more</span>
          <MoveUpRight size={18} />
        </button>
      </Link>
    </div>
  );
};
