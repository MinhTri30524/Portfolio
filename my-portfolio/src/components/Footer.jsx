import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/", icon: FiLinkedin },
  { label: "Facebook", href: "https://facebook.com/", icon: FiFacebook },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Name + tagline */}
        <div>
          <p className="font-heading text-sm font-semibold text-white">
            Minh Trí<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-xs text-text-muted">
            Frontend & WordPress Developer
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="inline-flex items-center justify-center rounded-full p-2 text-text-muted transition-colors duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent min-h-[44px] min-w-[44px]"
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-muted">
          © {year} Nguyễn Minh Trí. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;