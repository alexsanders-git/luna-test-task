import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function IconButton({children, className, ...rest}: IProps) {
    return (
        <button
            type="button"
            className={`size-[30px] p-1 cursor-pointer ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}
