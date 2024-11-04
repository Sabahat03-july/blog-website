// pages/posts.tsx
import { getSortedPostsData } from '../lib/posts';
import ListItem from './List';

interface BlogPost {
    id: string;
    title: string;
    date: string;
}

interface PostsProps {
    posts: BlogPost[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
    if (!posts) {
        return <div>Loading...</div>; // Fallback UI
    }

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    );
};

export async function getStaticProps() {
    const posts = await getSortedPostsData();
    console.log(posts); // Check the output

    return {
        props: {
            posts,
        },
    };
}

export default Posts;
