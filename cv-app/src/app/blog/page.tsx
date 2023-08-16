import Button from "@/components/button";
import Column from "@/components/layout/column";
import Row from "@/components/layout/row";
import StandardPage from "@/components/layout/standard-page";
import BlogCard from "@/components/theme-components/blog-card";
import MainLayout from "@/components/theme-components/main-layout";
import { blogPosts } from "@/data/posts";

export default function Blog() {
  return (
    <StandardPage>
      <MainLayout title="Blog" subtitle="My Diary">
        <Row>
          <Column xs={12} sm={12}>
            <div className="blog-masonry two-columns clearfix">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>

            <Button type="primary">See All Posts</Button>
          </Column>
        </Row>
      </MainLayout>
    </StandardPage>
  );
}
