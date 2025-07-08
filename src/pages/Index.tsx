import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold text-foreground">Smit</h1>
          <Navigation />
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Home</h2>
            <p className="text-foreground mb-4">
              Hey 👋, I'm Smit. Welcome to my homepage, <a href="https://sbr.gg" className="text-link hover:text-link-hover transition-colors">sbr.gg</a>!
            </p>
            <p className="text-foreground">
              I'm interested in software development, data science and UI/UX design! I'm currently a high 
              school student in Michigan who enjoys engineering stuff like CAD, 3D printing and Robotics!
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Contact</h2>
            <p className="text-foreground mb-4">
              If you have any questions, comments, or just want to talk, you can contact me easily through 
              the following ways:
            </p>
            <div className="space-y-2 text-foreground">
              <p>Discord: sm.it</p>
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
            <span>Smit 2025 • v0.0.1</span>
            <a 
              href="https://github.com/smit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-link hover:text-link-hover transition-colors"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
