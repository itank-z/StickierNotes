import "./style.scss";

function Tweet({ index, content }) {
    return (
        <div className="tweet">
            <div className="tweet-index">{index}</div>
            <div className="tweet-container">
                <p className="tweet-text">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Tweet;
