import axios from 'axios';
import { useEffect, useState } from 'react';

function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    let fetchPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            // Fusionne les tableaux
            setPosts([ ...posts, ...response.data ]);
        });
    }

    return (
        <div>
            {posts.map((post, index) => <div key={index}>{post.title}</div>)}
            <button onClick={() => fetchPosts()}>Charger</button>
        </div>
    );
}

export default Posts;
