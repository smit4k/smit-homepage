import Navigation from "@/components/Navigation";
import { FaGithub, FaGlobe, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-start mb-8">
          <img 
            src="/smit_pfp.svg" 
            alt="Smit's profile picture" 
            className="w-10 h-10 rounded-full object-cover border-2 border-border"
          />
          <Navigation />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Projects</h2>
            <p className="text-muted-foreground mb-6">
              Most of my projects are open source and available on my Github,{" "}
              <a
                href="https://github.com/smit4k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:text-link-hover transition-colors"
              >
                @smit4k
              </a>
              . Here are some highlights of my work:
            </p>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4 relative">
                <a
                  href="https://github.com/smit4k/conversia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-link transition-colors"
                  aria-label="View conversia on GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <div className="pr-16">
                  <h3 className="font-medium text-foreground mb-2">conversia</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    A powerful, multi-purpose file utility bot using the serenity and poise frameworks
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--rust))] text-secondary-foreground rounded">Rust</span>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href="https://smit4k.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-link transition-colors"
                    aria-label="View smit4k.github.io live site"
                  >
                    <FaGlobe size={18} />
                  </a>
                  <a
                    href="https://github.com/smit4k/smit4k.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-link transition-colors"
                    aria-label="View smit4k.github.io on GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
                <div className="pr-16">
                  <h3 className="font-medium text-foreground mb-2">smit4k.github.io</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    My previous homepage, a simple static site that links to my other socials
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--lang-html))] text-[hsl(var(--lang-html-foreground))] rounded">HTML</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--lang-css))] text-[hsl(var(--lang-css-foreground))] rounded">CSS</span>
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--lang-javascript))] text-[hsl(var(--lang-javascript-foreground))] rounded">JavaScript</span>
                  </div>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 relative">
                <a
                  href="https://github.com/smit4k/codingbat-rust"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-muted-foreground hover:text-link transition-colors"
                  aria-label="View codingbat-rust on GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <div className="pr-10">
                  <h3 className="font-medium text-foreground mb-2">codingbat-rust</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Rust solutions to the codingbat.com problems
                  </p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-[hsl(var(--rust))] text-secondary-foreground rounded">Rust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <span className="space-x-1 flex items-center">
            <span>Smit 2025</span>
            <span>•</span>
            <span><FaReact /></span>
            <span><RiTailwindCssFill /></span>
            <span>•</span>
            <a
              href="https://github.com/smit4k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-link-hover transition-colors"
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;