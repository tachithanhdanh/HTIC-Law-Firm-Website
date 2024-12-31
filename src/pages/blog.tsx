"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newBlog = { title, description, content };
    console.log(newBlog);
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className="min-h-screen flex-1 items-center justify-center bg-gray-100">
      <h2 className="text-4xl text-center font-medium py-6">Trang viết blog</h2>
      <div className="w-full max-w-3xl p-5 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Tiêu đề
              </label>
              <input
                onChange={handleTitle}
                type="text"
                value={title}
                id="title"
                className="block w-full rounded-md py-2 px-4 text-gray-900 border border-gray-300 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Type the title"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                Mô tả
              </label>
              <textarea
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="block w-full text-sm text-gray-900 rounded-lg border border-gray-300 p-2.5 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="content"
                className="block text-sm font-medium mb-2"
              >
                Nội dung
              </label>
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="h-[400px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-20 text-sm font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:ring-purple-200"
          >
            Create Blog Post
          </button>
        </form>
      </div>
    </div>
  );
}
