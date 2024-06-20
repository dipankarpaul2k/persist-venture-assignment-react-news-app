import { Link } from "react-router-dom";
import { socialLinks } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="bg-[#edf5fe] p-4">
      <div className="flex items-center justify-between flex-col md:flex-row w-full max-w-[1280px] mx-auto">
        <span>Thanks for visiting!</span>
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              to={social.to}
              aria-label={social.ariaLabel}
              target="_blank"
              className="max-sm:underline hover:underline"
            >
              <span className="sm:hidden">
                <social.icon size={20} />
              </span>
              <span className="max-sm:hidden">{social.label}</span>
            </Link>
          ))}
        </div>
        <span>Developed by me, Dipankar Paul.</span>
      </div>
    </footer>
  );
}
