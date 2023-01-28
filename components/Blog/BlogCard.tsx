import { IPost } from "./type";

export const BlogCard = ({ post }: { post: IPost }) => {
  const { title, coverImage, slug, brief } = post;
  return (
    <div className="hashnode-blog-post-card">
      <div className="hashnode-blog-post-card-cover">
        <img
          className="hashnode-blog-post-card-cover-image"
          alt={slug}
          src={coverImage}
        />
      </div>
      <div className="hashnode-blog-post-card-title">
        <a href={`/${slug}`}>{title}</a>
      </div>
      <div className="hashnode-blog-post-card-desc">{brief}</div>
    </div>
  );
};
