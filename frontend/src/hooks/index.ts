import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
    content: string;
    title: string;
    id: number;
    author: {
        name: string | null;
    };
    // authorId: number
}

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("token") || "",
                    },
                });
                console.log(response);
                
                
                if (response.data && response.data.blog) {
                    setBlog(response.data.blog);
                } else {
                    setError("Unexpected API response structure.");
                }
            } catch (err) {
                setError("Failed to fetch blog. Please try again later.");
                console.error("Error fetching blog:", err);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBlog();
    }, [id]);

    return { loading, blog, error };
};






export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        Authorization: localStorage.getItem("token") || "",
                    },
                });
                if (response.data && Array.isArray(response.data.blogs)) {
                    setBlogs(response.data.blogs);
                } else {
                    setError("Unexpected API response structure.");
                }
            } catch (err) {
                setError("Failed to fetch blogs. Please try again later.");
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { loading, blogs, error };
};
