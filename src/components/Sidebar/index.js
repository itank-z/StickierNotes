import SidebarItem from "../SidebarItem";
import { BsTwitter } from "react-icons/bs";
import { MdStickyNote2 } from "react-icons/md";
import { RiNewspaperFill } from "react-icons/ri";
import "./style.scss";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarItem>
                <BsTwitter className="sidebar-icon"/>
            </SidebarItem>

            <SidebarItem>
                <MdStickyNote2 className="sidebar-icon"/>
            </SidebarItem>

            <SidebarItem>
                <RiNewspaperFill className="sidebar-icon"/>
            </SidebarItem>
        </div>
    );
}