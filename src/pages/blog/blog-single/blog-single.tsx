import BlogTop from "./sections/blog-top";
import Navigation from "./sections/navigation";
import BlogSingleComment from "./sections/blog-single-comment";
import BlogSingleSetComment from "./sections/blog-single-set-comment";

export default function BlogSingle() {
    return (
        <div>
            <Navigation />
            <BlogTop />
            <BlogSingleComment />
            <BlogSingleSetComment />
        </div>
    );
}
