import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    // const loading = false;
    const { loading, blog, error } = useBlog({ id: id || "" });

    console.log("Loading:", loading); // Debug loading state
    console.log("Blog:", blog);       // Debug blog data
    console.log("error: ", error);
    // const blog = {
    //     content: "asdfasdfasdf",
    //     title: "satwik is a girl",
    //     id: 12,
    //     authorId: 12,
    // }
    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="h-screen flex flex-col justify-center">
                    <BlogCard
                        id={0} // Placeholder ID while loading
                        authorName="Loading Author"
                        title="Loading Title"
                        content="Loading Content"
                        publishedDate="Loading Date"
                    />
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div>
                <Appbar />
                <div className="h-screen flex flex-col justify-center">
                    <p className="text-center text-gray-500">Blog not found.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <FullBlog blog={blog} />
        </div>
    );
};
