import styles from './socialsStyle.module.scss'
import React from 'react'
import { Icon } from '@iconify/react';
import Resume from '../../assets/images/JaydenDryResume.pdf'
import { onHoverEnter, onHoverLeave } from '../../Mouse';

export default function Socials(props) {
    const socialLinks = [
        {
            href: "https://behance.net/jay",
            label: "BEHANCE",
            icon: "bxl:behance",
        },
        {
            href: "https://medium.com/@jaydendry",
            label: "MEDIUM",
            icon: "bxl:medium",
        },
        {
            href: "https://instagram.com/jayden.dry",
            label: "INSTAGRAM",
            icon: "bxl:instagram",
        },
        {
            href: "https://linkedin.com/in/jaydendry",
            label: "LINKEDIN",
            icon: "bxl:linkedin",
        },
        {
            href: Resume,
            label: "RESUME",
            icon: "carbon:document",
            target: "_blank",
            rel: "noreferrer",
        },
    ];

    return (
        <div className={`${styles.socialContainer}`} style={{ top: `${props.top}`, right: `${props.right}` }}>
            {socialLinks.map(({ href, label, icon, target = "rel=noopener", rel = "noopener" }, index) => (
                <a
                    key={index}
                    href={href}
                    target={target}
                    rel={rel}
                    className={`${styles[props.class]}`}
                >
                    <h3>{label}</h3>
                    <Icon icon={icon} className={`${styles.icon} ${styles[props.class]}`} />
                </a>
            ))}
        </div>
    );
}


