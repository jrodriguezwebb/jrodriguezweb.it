export interface BlogMasonryProps {
  columns?: 2 | 3;
  children: React.ReactNode;
}

export function BlogMasonry({ columns = 2, children }: BlogMasonryProps) {
  const columnClass = columns === 3 ? "three-columns" : "two-columns";

  return (
    <div className={`blog-masonry ${columnClass} clearfix`}>{children}</div>
  );
}
