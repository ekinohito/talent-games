import React, {MouseEventHandler} from 'react';

interface TWButtonProps {
    color: 'emerald' | 'blue-dark',
    size: 'default' | 'big',
    onClick?: MouseEventHandler,
    className?: string,
    children: string,
    href?: string
}

const TWButton = ({color, size, children, className, onClick, href}: TWButtonProps) => {
    const classes = `
                    px-4 
                    ${size === 'default' ? 'py-2.5 text-body2': 'py-4 text-subtitle1'} 
                    ${'bg-'+color} ${'hover:bg-'+color+'-hover'} transition-colors
                    hover:shadow-md transition-hover duration-200
                    text-white 
                    ${className ?? ''}
                    rounded-full
                    text-center
                `
    return (
        !href
            ?
            <button
                onClick={onClick}
                className={classes}
            >
                {children}
            </button>
            :
            <a
                href={href}
                onClick={onClick}
                className={`
                    ${classes}
                    cursor-pointer
                `}
            >
                {children}
            </a>
    )
}

export default TWButton;
