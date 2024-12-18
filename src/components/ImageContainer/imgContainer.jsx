import React from 'react';
import styles from './imgContainerStyle.module.scss'

export default function ImgContainer(props) {
    // Collect all valid images
    const images = [props.image1, props.image2, props.image3].filter(Boolean);

    // If no images exist, render nothing
    if (images.length === 0) {
        return null;
    }

    return (
        <div className={`${styles.imgContainer} ${styles.flex} ${styles[props.class]}`}>
            {images.map((image, index) => {
                const imgPath = `/images/${props.projectTitle}/${image}`;
                return (
                    <div
                        key={index}
                        className={images.length === 1 ? `${styles.imgSoloBorder} ${styles.imgBorder}` : styles.imgBorder}
                    >
                        {/* Check if image file exists by setting a valid src */}
                        <img src={imgPath} alt="" onError={(e) => (e.target.style.display = 'none')} />
                    </div>
                );
            })}
        </div>
    );
}
