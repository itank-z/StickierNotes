import "./style.scss";

function Post({ index, title, content }) {
    return (
        <div className="post">
            <div className="post-container">
                <h3 className="post-title">{title}</h3>
                <hr className="post-divider" />
                <p className="post-text">
                    {content}
                </p>
                <div className="post-corner-container">
                    <div className="post-corner"></div>
                </div>
            </div>
        </div>
    );
}

export default Post;
