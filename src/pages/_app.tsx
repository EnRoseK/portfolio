import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import Sidebar from "@/components/Sidebar";

const rubik = Rubik({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={rubik.className}>
        <Sidebar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>

      <ThemeSwitcher />
    </ThemeProvider>
  );
}
