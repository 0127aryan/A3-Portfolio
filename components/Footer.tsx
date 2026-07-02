import Logo from "./Logo";

const socials = ["LinkedIn", "GitHub", "Twitter", "Mail"];

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-primary opacity-80" />
            <span className="font-headline-md text-on-surface text-lg">
              A3 Technologies
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} A3 Technologies. Precision Engineering
            for the Digital Frontier.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social) => (
            <a
              key={social}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
              href="#"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
