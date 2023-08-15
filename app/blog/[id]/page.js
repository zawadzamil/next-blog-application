import blogs from '../../util/blog.json';

export default function SingleBlog({ params }) {
    const id = params.id;
    const blog = blogs.find(item => item.id === parseInt(id));
    console.log(blog);
    return (
        <section className='single-blog'>
            <h1 className='text-center text-lg'>Single Blog</h1>
            <div className='mx-auto'>
                <img src={blog.image}></img>
                <div>
                    <h5>{blog.title}</h5>
                    <h6>{blog.date}</h6>
                    <h6>{blog.content}</h6>
                </div>
            </div>
        </section>
    )
}
