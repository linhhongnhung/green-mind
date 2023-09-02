import React from 'react';
import Link from 'next/link';

interface TabIconProps {
    iconSrc: string;
    href: string;
}

const TabIcon: React.FC<TabIconProps> = (props) => {
    const { iconSrc, href } = props
    return (
        <Link className="ml-[50px] hover:opacity-70" href={href}>
            <img src={iconSrc} alt="icon"/>
        </Link>
    )
}

export default TabIcon;