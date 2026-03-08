import { Linkedin, Instagram, Twitter } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-2xl font-display font-extrabold tracking-tight">
              X9<span className="text-gradient-accent">Media</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AI-first creative marketing agency helping ambitious businesses scale with 
              data-driven strategy, paid media, and AI optimization.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://linkedin.com/company/x9media" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border/50 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Linkedin size={16} />
              </a>
              <a href="#" className="rounded-lg border border-border/50 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Instagram size={16} />
              </a>
              <a href="#" className="rounded-lg border border-border/50 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2">
              {["Performance Marketing", "Lead Generation", "Email Marketing", "AI SEO & CRO", "Web Design"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Work", href: "#our-work" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://calendly.com/x9media/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary transition-colors hover:text-primary/80"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a href="mailto:hello@x9media.in" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  hello@x9media.in
                </a>
              </li>
              <li>
                <a href="https://x9media.in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  x9media.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} X9 Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
