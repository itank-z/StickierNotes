import profilePicture from '../../static/images/profilePicture.jpeg';
import './style.scss';

export default function Profile() {
    return (
        <div>
            <img src={profilePicture} alt='profile picture' className='profile-image'/>
        </div>
    )
};
