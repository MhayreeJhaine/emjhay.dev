import { MdDevices, MdLightMode } from "react-icons/md";
import { useTheme } from "../../../../themeContext/ThemeProvider";
import { GiMoonBats } from "react-icons/gi";
import { useMemo } from "react";

const themes: ("system" | "light" | "dark")[] = ["system", "light", "dark"];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const nextTheme = useMemo(() => {
    const currentIndex = themes.indexOf(theme);
    return themes[(currentIndex + 1) % themes.length];
  }, [theme]);

  const icon = {
    system: <MdDevices className="text-2xl" />,
    light: <MdLightMode className="text-2xl" />,
    dark: <GiMoonBats className="text-2xl" />,
  }[theme];

  const nextLabel = {
    system: "Set to Light Theme",
    light: "Set to Dark Theme",
    dark: "Set to Device Theme",
  }[theme];

  return (
    <button
      onClick={() => setTheme(nextTheme)}
      className="relative group p-2 rounded-sm hover:bg-hoverNav
       dark:hover:bg-hoverNavDark cursor-pointer transition"
      aria-label={nextLabel}
    >
      {icon}

      <span
        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1
        rounded text-xs opacity-0 scale-95 group-hover:opacity-100
        group-hover:scale-100 transition duration-200 pointer-events-none z-50
        whitespace-nowrap bg-tooltipBg text-black"
      >
        {nextLabel}
      </span>
    </button>
  );
};

export default ThemeToggle;
