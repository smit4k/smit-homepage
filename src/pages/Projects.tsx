import Navigation from "@/components/Navigation";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold text-foreground">Smit</h1>
          <Navigation />
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Projects</h2>
            <p className="text-muted-foreground mb-6">
              Here are some of the projects I've been working on:
            </p>
            
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">Personal Website</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A clean, minimalist personal homepage built with React and TypeScript.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">React</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">TypeScript</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">Tailwind</span>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">CAD Design Tools</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Custom tools and plugins for CAD software to streamline the design process.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">Python</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">CAD</span>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">Robotics Control System</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Control software for robotics projects including sensor integration and autonomous navigation.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">C++</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">Arduino</span>
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">Robotics</span>
                </div>
              </div>
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

export default Projects;