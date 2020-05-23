import React from 'react';

const PostListItem = () => {
return(
    <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">
            Hello, world!
        </span>
        <div className="d-flex justify-content-center allign-items-center">
            <button type='button' className="btn-star btn-sm">
                <i className="fa fa-star"></i>
            </button>
            <button type='button' className="btn-thash btn-sm">
                <i className="fa fa-thash-o"></i>
            </button>
            <i className="fa fa-heart"></i>
        </div>
    </li>
)
}

export default PostListItem;