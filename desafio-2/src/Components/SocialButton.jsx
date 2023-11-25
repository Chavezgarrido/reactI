import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ icon, onClick}) => {
    let socialIcon;

    switch (icon) {
        case 'fa-facebook':
            socialIcon = faFacebook;
            break;
        case 'fa-github':
            socialIcon = faGithub;
            break;
        case 'fa-linkedin':
            socialIcon = faLinkedin;
            break;
        default:
            socialIcon = null;
    }

    return (
        <button className="btn btn-primary me-2" onClick={onClick}>
            {socialIcon && <FontAwesomeIcon icon={socialIcon} />} </button>
    );
}

export default SocialButton;