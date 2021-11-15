import "./style.scss";

function ContentPane(props) {
    return (
        <div className="tweets-content-pane">
            <h3 className="tweets-title">{props.title}
                <span className="tweets-symbol">{props.symbol}</span>
            </h3>
            <div className="tweets-section">
                {props.children}
            </div>
        </div>
    );
}

export default ContentPane;
