// app/insights/[title]/page.tsx
import PostClient from "./PostClient";
import { fetchPostByTitle } from "@/lib/fetchPostByTitle";
import { notFound } from "next/navigation";
import Script from "next/script";

interface Props {
  params: { title: string | string[] };
}

export async function generateMetadata({ params }: Props) {
  const titleParam = Array.isArray(params.title) ? params.title[0] : params.title;
  const decodedTitle = decodeURIComponent(titleParam || "");
  const post = await fetchPostByTitle(decodedTitle);

  if (!post) {
    return { title: "Post Not Found", description: "The requested blog post does not exist." };
  }

  return {
    title: post.heading,
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
    openGraph: {
      title: post.heading,
      description: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.heading,
      description: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const titleParam = Array.isArray(params.title) ? params.title[0] : params.title;
  const decodedTitle = decodeURIComponent(titleParam || "");
  const post = await fetchPostByTitle(decodedTitle);

  if (!post) notFound();

  const postId = post.id;
  const formattedDate = post.createdAt?.seconds
    ? new Date(post.createdAt.seconds * 1000).toISOString()
    : new Date().toISOString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.heading,
    image: post.coverImage || undefined,
    author: {
      "@type": "Person",
      name: "Admin",
    },
    datePublished: formattedDate,
    dateModified: formattedDate,
    publisher: {
      "@type": "Organization",
      name: "YourSiteName",
      logo: {
        "@type": "ImageObject",
        url: "/logo.png",
      },
    },
    description: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
  };

  const serverRenderedPost = {
    ...post,
    postId,
    formattedDate,
    excerpt: post.content.replace(/<[^>]+>/g, "").slice(0, 160),
  };

  return (
    <article className="max-w-7xl mx-auto space-y-6 py-36">
      {/* JSON-LD structured data */}
      <Script type="application/ld+json" id="blog-json-ld">
        {JSON.stringify(jsonLd)}
      </Script>

      {serverRenderedPost.coverImage && (
        <img
          src={serverRenderedPost.coverImage}
          alt={serverRenderedPost.heading}
          className="w-full rounded shadow-md"
        />
      )}

      <h1 className="text-4xl font-bold">{serverRenderedPost.heading}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <span>Admin</span>
        <span>{serverRenderedPost.formattedDate.slice(0, 10)}</span>
        <span>{serverRenderedPost.interactions.views} views</span>
        <span>{serverRenderedPost.interactions.like} likes</span>
        <span>{serverRenderedPost.interactions.share} shares</span>
      </div>

      {serverRenderedPost.tags && (
        <div className="flex flex-wrap gap-2 mt-2">
          {serverRenderedPost.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div
        className="prose max-w-7xl mt-6 [&_p]:my-2 [&_h1]:my-3 [&_h2]:my-2 [&_ul]:my-2"
        dangerouslySetInnerHTML={{ __html: serverRenderedPost.content }}
      />

      
      <PostClient post={{ postId: serverRenderedPost.id, interactions: serverRenderedPost.interactions }} />

    </article>
  );
}
