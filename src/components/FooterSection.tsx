import { Linkedin, Instagram, Twitter, ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl italic tracking-tight">
              X9<span className="not-italic font-body font-semibold">.Media</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AI-first creative marketing agency helping ambitious businesses scale with 
              data-driven strategy, paid media, and AI optimization.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/x9media" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {["Performance Marketing", "Lead Generation", "Email Marketing", "AI SEO & CRO", "Web Design"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Work", href: "#our-work" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Connect</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://calendly.com/x9media/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-foreground"
                >
                  Book a Call
                  <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a href="mailto:hello@x9media.in" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                  hello@x9media.in
                </a>
              </li>
              <li>
                <a href="https://x9media.in" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                  x9media.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} X9 Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
