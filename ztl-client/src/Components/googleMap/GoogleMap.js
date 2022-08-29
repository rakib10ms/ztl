import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="pt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.757244858502!2d90.38757651445523!3d23.720361495841267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94c5defd7db%3A0xfbe3840598158ab6!2sZaimah%20Technologies%20Limited!5e0!3m2!1sen!2sbd!4v1645611019771!5m2!1sen!2sbd" style={{ width: "100%", height: "400px", frameborder: "0" }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </>
    );
};

export default GoogleMap;