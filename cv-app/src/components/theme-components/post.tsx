import Image from "next/image";

export interface PostProps {
  category: string;
  postLink: string;
  imageUrl: string;
  imageAlt: string;
  date: string;
  title: string;
}

export default function Post({
  category,
  postLink,
  imageUrl,
  imageAlt,
  date,
  title,
}: PostProps) {
  return (
    <div className="item">
      <div className="blog-card">
        <div className="media-block">
          <div className="category">
            <a href="#" title={`View all posts in ${category}`}>
              {category}
            </a>
          </div>
          <a href={postLink}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={536}
              height={250}
              title=""
            />
            <div className="mask"></div>
          </a>
        </div>
        <div className="post-info">
          <div className="post-date">{date}</div>
          <a href={postLink}>
            <h4 className="blog-item-title">{title}</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
