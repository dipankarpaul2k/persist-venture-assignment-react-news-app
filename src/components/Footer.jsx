import { Link } from "react-router-dom";
import { socialLinks } from "../utils/constants";
import { BsEmojiSmile } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#edf5fe] p-4">
      <div className="flex items-center justify-between flex-col md:flex-row w-full max-w-[1280px] mx-auto">
        <div className="flex items-center gap-1">
          <span>Thanks for visiting!</span>
          <BsEmojiSmile />
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              to={social.to}
              aria-label={social.ariaLabel}
              target="_blank"
              className="hover:underline"
            >
              {/* <social.label /> */}
              {social.label}
            </Link>
          ))}
        </div>
        <span>Developed by me, Dipankar Paul.</span>
      </div>
    </footer>
  );
}
