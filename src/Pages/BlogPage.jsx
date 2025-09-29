import React from "react";
import FirstBlogImg from '../assets/reactBlog.png';
import SecondBlogImg from '../assets/backendBlog.jpg';
function BlogPage() {
  return (
    <div className="m-6 md:m-20">
        <nav className="bg-white text-2xl text-black text-center font-bold font-mono mb-10 p-2 rounded-4xl">Blogs</nav>
      <div className="flex flex-wrap gap-10 ">
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={FirstBlogImg}
            alt="React journey"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How I overcome React</h2>
          <p>
            From making whole app in one go to turning them into small components
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-full">Read Now </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={SecondBlogImg}
            alt="React journey"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">How I overcome React</h2>
          <p>
            From making whole app in one go to turning them into small components
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-full">Read Now </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default BlogPage;
