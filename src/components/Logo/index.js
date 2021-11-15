import logo from '../../static/images/favicon.ico';
import './style.scss';

export default function Logo() {
    return (
        <div>
            <img src={logo} alt='logo' className='logo'/>
        </div>
    )
};
