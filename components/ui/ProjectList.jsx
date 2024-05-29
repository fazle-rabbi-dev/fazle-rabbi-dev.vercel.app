import { Github } from "lucide-react";
import {
  useState, useEffect
} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ListFilter } from 'lucide-react';

const App = () => {
  return (
    <ListFilter />
  );
};

export default App;

export const ProjectList = ({ name, desc, date, icon, link }) => {
  return (
    <li className="my-4 md:my-0 overflow-hidden border-[.6px] border-gray-700/20 p-2 rounded-lg active:bg-purple-500/10 dark:active:bg-teal-500/10 dark:border-offwhite/30">
      <h2 className="font-bold dark:text-light_2">{name}</h2>
      <span className="text-gray-500 text-sm">{date}</span>
      <p className="mt-2 text-sm text-gray-600 dark:text-offwhite">{desc}</p>
      <Link
        target="_blank"
        className="inline-block my-2"
        href={link || ""}
      >
        <button
          className="w-full bg-purple-500 text-white rounded px-2 py-1 flex items-center gap-2 transition duration-200 hover:bg-purple-600 dark:text-white dark:bg-teal-600 dark:hover:bg-teal-700"
          type="button"
        >
          <span>Github</span>
          <Github size={18} />
        </button>
      </Link>
    </li>
  )
}
