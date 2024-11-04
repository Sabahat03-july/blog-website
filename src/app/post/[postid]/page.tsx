import { getSortedPostsData } from '../lib/posts';
import ListItem from '../components/List';

const Posts = ({ posts }) => {
    if (!posts) {
        return <div>Loading...</div>; // Fallback UI
    }
    
    if (posts.length === 0) {
        return <div>No posts available.</div>; // Check if posts is empty
    }

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold">Blog</h2>
            <ul>
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    );
};

export async function getStaticProps() {
    const posts = await getSortedPostsData();
    return {
        props: {
            posts,
        },
    };
}

export default Posts;
