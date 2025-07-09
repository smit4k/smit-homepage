import Navigation from "@/components/Navigation";
import { FaGithub, FaDiscord, FaMastodon, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Socials = () => {
  const socials = [
    { 
      name: "GitHub", 
      handle: "@smit4k",
      url: "https://github.com/smit4k", 
      icon: FaGithub,
      description: "Open source projects and code"
    },
    { 
      name: "Discord", 
      handle: "sm.it", 
      icon: FaDiscord,
      description: "Direct chat and collaboration"
    },
    { 
      name: "Email", 
      handle: "smit@smit.codes",
      url: "mailto:smit@smit.codes", 
      icon: IoMdMail,
      description: "Email me!"
    },
    { 
      name: "X", 
      handle: "@saberdevx",
      url: "https://twitter.com/saberdevx", 
      icon: FaXTwitter,
      description: "Tech thoughts and updates"
    },
  ];

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
            <h2 className="text-xl font-semibold mb-4 text-foreground">Socials</h2>
            <p className="text-muted-foreground mb-6">
              Connect with me across different platforms. Feel free to reach out for collaborations, 
              questions, or just to say hi!
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {socials.map((social, index) => (
                social.url ? (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <social.icon size={24} className="text-muted-foreground group-hover:text-link transition-colors mt-1" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{social.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{social.handle}</p>
                      <p className="text-xs text-muted-foreground">{social.description}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 border border-border rounded-lg"
                  >
                    <social.icon size={24} className="text-muted-foreground mt-1" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{social.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {social.name === "Discord" ? (
                          <span className="bg-teal-500/10 border border-teal-500/60 text-teal-300 px-2 py-0.5 rounded text-sm font-mono">
                            {social.handle}
                          </span>
                        ) : (
                          social.handle
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{social.description}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
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
  );
};

export default Socials;