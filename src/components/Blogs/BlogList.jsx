import BlogItem from "./BlogItem";

const BlogList = ({blogPosts}) => {
    return (
      <div className="space-y-4 mb-16">
        {blogPosts.map((post, index) => (
          <BlogItem key={index} image={post.image} title={post.title} ngo={post.ngo} description={post.description} />
        ))}
      </div>
    );
  };
  
  export default BlogList;
  