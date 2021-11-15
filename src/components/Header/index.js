import Profile from '../Profile';
import Logo from '../Logo';
import './style.scss'

export default function Header() {
    return (
        <div className="header">
            <div>
                <Logo />
            </div>
            <div className="profile">
                <Profile />
            </div>
        </div>
    );
}