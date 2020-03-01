import React from 'react';
import './Link.css'

interface LinkProps {
    href: string;
    label: string;
    logo?: string;
}

const Link = (props: LinkProps) => {
    return (
        <a className={'link'} href={props.href}>
            {props.label} {props.logo && <img className={'logo'} src={props.logo} alt={props.label} />}
        </a>
    )
}

export default Link;