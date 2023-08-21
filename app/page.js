import Link from "next/link";
import { Fragment } from 'react';
import GetAllCategories from "./api/getAllCategories";
import GetLatestPosts from "./api/getLtestPosts";

export default async function Home() {

  const latestPosts = await GetLatestPosts();

  const categories = await GetAllCategories();

  const imageStyle = {
    height: '200px',
};

  return (
    <Fragment>
      <section>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div class="flex flex-col w-full mb-12 text-center">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-blue-600 rounded-full bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="12" r="9"></circle>
                <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
              </svg>
            </div>
            <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Welcome to<br class="hidden lg:block"></br>
              Ostad Blog Application
            </h1>

            <div>
              <button className='bg-blue-600 text-white  rounded-md px-4 py-2 mt-8'>
                <Link href="/blog">Visit Blogs</Link>
              </button>
            </div>
          </div>
        </div>


      </section>

      <section class = "categories container p-12 m-7">
        <h2 class = "text-3xl text-gray-700 text-center mb-8">Brows Categories</h2>
     {
      categories.map(category=>(
        <button class="rounded-full bg-gray-800 text-white py-2 px-3 m-4">{category.name}</button>
      ))
     }
      </section>

      <section class="latest-blogs">
        <div class="container">
          <h2 class="text-4xl text-gray-800 text-center fw-bold">
            Latest Blogs
          </h2>
          <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 p-10">
            

             {
              latestPosts.map(blog=>(
                <div class="basis-1/4 mx-2 ">
                <div
                className="block blog-card rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                  <img className="rounded-t-lg" src={blog.img} alt="" style={imageStyle} />
                </a>
                <div className="p-6">
                  <Link href={`/blog/${blog.id}`}>
                    <h5
                      className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      {blog.title}
                    </h5>
                  </Link>
                  <h6>{blog.created_at}</h6>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {blog.short}
                  </p>

                  <Link href={`/blog/${blog.id}`}>
                    <button
                      type="button"
                      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-900 bg-blue-400">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
              </div>
              ))
             }
          </div>
        </div>
      </section>
    </Fragment>
  )
}
