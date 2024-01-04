import Link from "next/link";
import {
  Home,
  UserRound,
  Lightbulb,
  CircleUser,
  MessagesSquare,
  Flame,
  Moon,
  Sun,
  Globe
} from "lucide-react";
import { useRouter } from "next/router";
import useDarkTheme from "@/hooks/useDarkTheme";
import { navLinks } from "@/constants";

export const Header = () => {
  const { pathname } = useRouter();
  const { isDarkMode, toggleDarkMode } = useDarkTheme();

  return (
    <header className="fixed z-50 top-0 w-full bg-[#f8f8ff] shadow rounded-b-2xl h-16 px-8 dark:bg-[#161d27]">
      <nav className="h-full w-full overflow-auto text-center">
        <ul className="h-full inline-flex md:flex gap-4 justify-center items-center">
          <li onClick={toggleDarkMode} className="">
            {isDarkMode ? <Sun /> : <Moon />}
          </li>
          {navLinks?.map(name => (
            <li
              key={name}
              className={
                pathname === "/" && name === "Home"
                  ? "nav_link_active"
                  : pathname === `/${name.toLowerCase()}`
                  ? "nav_link_active"
                  : ""
              }
            >
              <Link
                // scroll={false}
                className="nav_link"
                href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
              >
                {name === "Home" ? (
                  <Home />
                ) : name === "About" ? (
                  <UserRound />
                ) : name === "Skills" ? (
                  <Lightbulb />
                ) : name === "Projects" ? (
                  <Flame />
                ) : name === "Blogs" ? (
                  <Globe />
                ) : name === "Home" ? (
                  <Home />
                ) : (
                  <MessagesSquare />
                )}
                <span className="text-sm font-light">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
