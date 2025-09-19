import { ArrowUpRight } from "lucide-react";
import React from "react";

interface BlogCardProps {
  image: string;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({ image, author, date, title, excerpt, tags }) => {
  return (
    <div className="bg-white shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <p className="text-sm text-[#FF0004] mb-2 flex justify-between">
            <div>
          <span className="font-semibold">{author}</span> • {date}
            </div>
          <span className="text-black">
            <ArrowUpRight/>
          </span>
        </p>
        <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
