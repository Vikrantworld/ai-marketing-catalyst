const FooterSection = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xl font-display font-extrabold tracking-tight">
              X9<span className="text-gradient-accent">Media</span>
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              AI-First Digital Marketing Agency — Mumbai, India
            </p>
          </div>
          <div className="flex gap-8">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} X9 Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
