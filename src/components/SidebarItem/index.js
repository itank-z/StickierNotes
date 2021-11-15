import "./style.scss";

export default function SidebarItem(props) {
    return (
        <div className="sidebar-icon-div">
            {props.children}
        </div>
    );
}