import { useTheme } from "next-themes";
import { FC } from "react";

import { FaMoon } from "react-icons/fa";

const ThemeSwitcher: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={(): void => {
        currentTheme == "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="fixed top-[25px] right-[25px] p-[15px] text-xl rounded-full bg-dark-2 text-white dark:bg-white dark:text-dark-2 duration-150"
    >
      <FaMoon />
    </button>
  );
};

export default ThemeSwitcher;
