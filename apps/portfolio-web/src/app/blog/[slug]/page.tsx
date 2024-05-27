import Link from "next/link";
import { Button, buttonVariants } from "~/features/ui/button";
import { BLOG_POSTS } from "~/lib/blogPosts";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const curr_post = BLOG_POSTS.find((post) => post.slug == slug);
  // TODO: Handle error better
  if (!curr_post)
    return (
      <main className="flex-1">
        <h1>Error blog post unavailable</h1>
      </main>
    );
  return (
    <main className="flex-1">
      <curr_post.component />
      <div className="container">
        <Link
          href="/blog"
          className={buttonVariants({ variant: "ghost", className: "my-2" })}
        >
          Back
        </Link>
      </div>
    </main>
  );
}
