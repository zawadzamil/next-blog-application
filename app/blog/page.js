import Link from "next/link";
import GetAllPosts from "../api/getAllPosts";
import { useRouter } from 'next/router';

export default async function page() {
    
    const blogs = await GetAllPosts();
    const imageStyle = {
        height: '200px',
    };
    return (
        <section className="mx-8 p-2 container">
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

                {blogs.map(blog => (
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

                ))}
            </div>
        </section>
    )
}
