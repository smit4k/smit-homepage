import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex gap-2 mb-8">
      <Link 
        to="/" 
        className={`px-3 py-1 rounded transition-colors ${
          isActive('/') 
            ? 'text-accent bg-secondary' 
            : 'text-muted-foreground hover:text-link'
        }`}
      >
        home
      </Link>
      <Link 
        to="/projects" 
        className={`px-3 py-1 rounded transition-colors ${
          isActive('/projects') 
            ? 'text-accent bg-secondary' 
            : 'text-muted-foreground hover:text-link'
        }`}
      >
        projects
      </Link>
      <a 
        href="https://smit4k.github.io" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-3 py-1 rounded text-muted-foreground hover:text-link transition-colors"
      >
        socials
      </a>
    </nav>
  );
};

export default Navigation;