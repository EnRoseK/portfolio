import { FC } from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const HomeSection: FC = () => {
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["Web Developer", "Mobile Developer"],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 100,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="text-dark-2 dark:text-white container py-[50px]">
      <div className="grid grid-cols-2 gap-[30px] items-center h-screen">
        <div>
          <h4 className="text-[25px] font-medium leading-[30px] mb-5">Hello, I am</h4>
          <h1 className="text-[65px] font-bold leading-none mb-5">Javkhlant Altankhuyag</h1>
          <h5 className="text-lg font-medium leading-[30.6px] mb-5">
            I Am Passionate <span ref={typedEl} />
          </h5>
          <p className="max-w-[450px] text-lg font-light leading-[30.6px] mb-4 dark:text-white/80">
            I design and develop services for customers of all sizes, specializing in creating
            stylish, modern websites, web services and online stores.
          </p>
          <button className="text-white inline-block bg-primary px-[25px] leading-[42px] border border-transparent text-sm tracking-[2px] shadow-btnShadowLight dark:shadow-btnShadowDark mt-4 hover:shadow-btnShadowPrimary duration-150 dark:hover:shadow-btnShadowPrimary hover:bg-dark-2 dark:hover:bg-white dark:hover:text-primary">
            Download CV
          </button>
        </div>

        <div className="grid place-items-center">
          <div className="w-[500px] h-[500px]  bg-primary rounded-full overflow-hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
