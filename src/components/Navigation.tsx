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
            <Link 
        to="/blog" 
        className={`px-3 py-1 rounded transition-colors ${
          isActive('/blog') 
            ? 'text-accent bg-secondary' 
            : 'text-muted-foreground hover:text-link'
        }`}
      >
        blog
      </Link>
      <Link 
        to="/socials"
        className={`px-3 py-1 rounded transition-colors ${
          isActive('/socials') 
            ? 'text-accent bg-secondary' 
            : 'text-muted-foreground hover:text-link'
        }`}
      >
        socials
      </Link>
    </nav>
  );
};

export default Navigation;