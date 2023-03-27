import Image from "next/image";
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
        <a href={`https://bhavika-tibrewal.hashnode.dev/${slug}`}>{title}</a>
      </div>
      <p className="hashnode-blog-post-card-desc">{brief}</p>
    </div>
  );
};
