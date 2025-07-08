import Navigation from "@/components/Navigation";

const Index = () => {
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
            <h2 className="text-xl font-semibold mb-4 text-foreground">Home</h2>
            <p className="text-foreground mb-4">
              Hey 👋, I'm Smit. Welcome to my homepage, <a href="https://TBD" className="text-link hover:text-link-hover transition-colors">TBD</a>!
            </p>
            <p className="text-foreground">
              I'm currently a high school student in Michigan who is interested in software development, data science and UI/UX design!
              I also enjoy CAD and robotics, and I keep up to date on the latest tech trends and innovations.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Contact</h2>
            <p className="text-foreground mb-4">
              If you have any questions, comments, or just want to talk, you can contact me easily through
              the following ways:
            </p>
            <div className="space-y-2 text-foreground">
              <p className="flex items-center gap-2">
                <span>Discord:</span>
                <span className="bg-teal-500/10 border border-teal-500/60 text-teal-300 px-2 py-0.5 rounded text-sm font-mono">
                  sm.it
                </span>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:smit.patil.usa@gmail.com"
                  className="text-link hover:text-link-hover transition-colors"
                >
                  smit.patil.usa@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="space-x-1 flex items-center">
              <span>Smit 2025</span>
              <span>•</span>
              <span>v0.0.1</span>
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
    </div>
  );
};

export default Index;