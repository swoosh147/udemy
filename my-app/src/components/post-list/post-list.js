import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                // label={item.label} 
                // important={item.important}
                {...itemProps}
                />
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
        {elements}
            {/* <PostListItem label={posts[0].label} important={posts[0].important}/>
            {/* <PostListItem label="that is so good" />
            <PostListItem label="i need a breack..."/> */}
        </ul>
    )
}

export default PostList;