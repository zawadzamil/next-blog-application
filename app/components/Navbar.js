import Link from "next/link";
import GetAllCategories from "../api/getAllCategories";

export default async function Navbar() {
    const categories = await GetAllCategories();

    return (
        <nav className="flex space-x-6 my-4 mx-16">
            <div>
                {" "}
                <Link href="/"> Home</Link>{" "}
            </div>
            <div>
                <Link href="/blog">Blogs</Link>
            </div>
            <div>
                <Link href="/about">About</Link>
            </div>
            <div>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    );
}
