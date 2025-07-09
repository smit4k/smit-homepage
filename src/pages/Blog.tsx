import Navigation from "@/components/Navigation";
import { FaClock } from "react-icons/fa";

const posts = [
	{
		slug: "test-blog",
		title: "My First Blog Post",
		date: "July 8, 2025",
		description: "This is my first blog post, testing out MDX integration!",
    	estTimeToRead: "1 min",
	},
	// Add more posts here
];

const Blog = () => (
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
			<h2 className="text-xl font-semibold mb-4 text-foreground">Blog</h2>
      <p className="text-muted-foreground mb-6">Welcome to my blog! I'll be writing some cool stuff!</p>
			<div className="space-y-4">
				{posts.map((post) => (
					<a
						key={post.slug}
						href={`/blog/${post.slug}`}
						className="block border border-border rounded-lg p-4 hover:bg-secondary transition-colors"
					>
						<div className="flex justify-between items-start">
							<div>
								<h3 className="text-lg font-semibold text-foreground mb-1">
									{post.title}
								</h3>
								<p className="text-xs text-muted-foreground mb-2">
									{post.date}
								</p>
							</div>
							<span className="text-xs text-muted-foreground whitespace-nowrap ml-4 mt-1">
								{post.estTimeToRead} <FaClock className="inline-block" />
							</span>
						</div>
						<p className="text-sm text-muted-foreground mt-2">
							{post.description}
						</p>
					</a>
				))}
			</div>
		</div>
	</div>
);

export default Blog;