import Button from "@/components/button";
import Column from "@/components/layout/column";
import MainLayout from "@/components/theme-components/main-layout";
import Post from "@/components/theme-components/post";
import Row from "@/components/layout/row";
import StandardPage from "@/components/layout/standard-page";
import { BlogMasonry } from "@/components/theme-components/blog-mansonry";
import { blogPosts } from "@/data/posts";

export default function Blog() {
  return (
    <StandardPage>
      <MainLayout title="Blog" subtitle="My Diary">
        <Row>
          <Column xs={12} sm={12}>
            <BlogMasonry>
              {blogPosts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            </BlogMasonry>

            <Button type="primary">See All Posts</Button>
          </Column>
        </Row>
      </MainLayout>
    </StandardPage>
  );
}
