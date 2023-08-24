import React from 'react';

const ImageWithText = ({ imageSrc, text, layout = "left" }) => {
    return (
        <div className={`d-flex align-items-center ${layout === "right" ? "flex-row-reverse" : ""}`}>
            <img src={imageSrc} alt="Dynamic Content" className={`me-3 ${layout === "right" ? "ms-3" : ""}`} style={{ width: '33%' }} />
            <span>{text}</span>
        </div>
    );
}

export default ImageWithText
