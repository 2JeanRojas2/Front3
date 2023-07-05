import React from 'react';
import { useParams } from 'react-router-dom';
//import styles from "./blog.scss";

const Blog = () => {
    let { id, resourceId } = useParams();
    return (
        <div >
            <h1>Blog</h1>
            <p>Artículo {id} </p>
            <p>Recurso {resourceId}</p>
        </div>
    );
};
export default Blog;
//className={styles.content}