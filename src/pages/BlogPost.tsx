import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TestBlog from "../blog/test-blog.mdx";
import MakingOfLQF from "../blog/making-of-lqf.mdx";
import { FaClock, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const posts = {
  "making-of-lqf": {
    component: MakingOfLQF,
    title: "My own configuration language, LQF",
    date: "July 9, 2025",
    estTimeToRead: "3 min",
  },
  "test-blog": {
    component: TestBlog,
    title: "My First Blog Post",
    date: "July 8, 2025",
    estTimeToRead: "1 min",
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-foreground">Post not found.</div>
      </div>
    );
  }

  const PostComponent = post.component;

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
        <Link to="/blog" className="text-link hover:underline mb-4 block">
          &larr; Back to Blog
        </Link>
        <h1 className="text-2xl font-bold mb-2 text-foreground">{post.title}</h1>
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
          <span>{post.date}</span>
          <span className="flex items-center space-x-1">
            <span>{post.estTimeToRead}</span>
            <FaClock className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </span>
        </div>
        <hr className="border-border mb-4" />
        <div className="prose prose-invert">
          <PostComponent />
        </div>
        <div className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
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
    </div>
  );
};

export default BlogPost;
