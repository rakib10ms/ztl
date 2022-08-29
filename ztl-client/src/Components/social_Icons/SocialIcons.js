import React from 'react';
// import './SocialIcons.css';
import '../social_Icons/SocialIcons.css'
import WhatsUp from '../../Images/WhatsUp.png';
import Message from '../../Images/Message.png';
import ContactAlt from '../../Images/ContactAlt.png';
import ChatWithUs from '../../Images/ChatWithUs.png';

const SocialIcons = () => {
    return (
        <div>
            <div> {/* sticky social side bar  */}
                {/* <div className='icon_bar_ChatWithUs'>
                    <img src={ChatWithUs} className=" img-fluid imgChatWithUs" style={{ width: '125px', height: '25px' }} alt="ChatWithUs" border="0" />
                </div> */}
                <div className='icon-bar'>
                    <a href="https://wa.me/+8801714131050" target="_blank">
                        <img src={WhatsUp} className=" img-fluid rounded" style={{ width: '60px', height: '40px' }} alt="WhatsUp" border="0" />
                    </a>
                    {/* <a href="#">
                        <img src={Message} className=" img-fluid rounded" style={{ width: '60px', height: '40px' }} alt="Message" border="0" />
                    </a> */}
                    <a href="tel:+8801714131050">
                        <img src={ContactAlt} className=" img-fluid rounded" style={{ width: '60px', height: '40px' }} alt="ContactAlt" border="0" />
                    </a>
                </div>
            </div> {/* sticky social side bar  */}
        </div>
    );
};

export default SocialIcons;