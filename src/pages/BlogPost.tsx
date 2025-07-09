import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TestBlog from "../blog/test-blog.mdx";

const posts = {
  "test-blog": {
    component: TestBlog,
    title: "My First Blog Post",
    date: "2025-07-08",
  },
  // Add more posts here
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
        <Link to="/blog" className="text-link hover:underline mb-4 block">&larr; Back to Blog</Link>
        <h1 className="text-2xl font-bold mb-2 text-foreground">{post.title}</h1>
        <p className="text-xs text-muted-foreground mb-6">{post.date}</p>
        <div className="prose prose-invert">
          <PostComponent />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;