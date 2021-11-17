import "./style.scss";

function Page({ index, title, content }) {
    return (
        <div className="page">
            <div className="page-container">
                <h3 className="page-title">{title}</h3>
                <hr className="page-divider" />
                <p>Subtitle</p>
                <hr className="page-divider" />
                <p className="page-text">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default Page;
