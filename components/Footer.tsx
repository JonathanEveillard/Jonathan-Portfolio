import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          We improve ourselves with the best <span className="text-purple">people</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I am always open to new opportunities and meeting new people. Feel free to reach out to me
        </p>
        <a href="mailto:jonaeve50@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Jonathan. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
