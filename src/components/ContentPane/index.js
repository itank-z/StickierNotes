import "./style.scss";

function ContentPane(props) {
    return (
        <div className={props.contentPaneType + "-content-pane"}>
            <h3 className={props.contentPaneType + "-title"}>{props.title}
                <span className={props.contentPaneType + "-symbol"}>{props.symbol}</span>
            </h3>
            <div className={props.contentPaneType + "-section"}>
                {props.children}
            </div>
        </div>
    );
}

export default ContentPane;
