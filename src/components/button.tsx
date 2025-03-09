interface IProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    style?: 'primary' | 'outline' | 'text';
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({text, type = 'button', style = 'primary', onClick, disabled}: IProps) {
    const styleClasses = {
        primary: 'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-400  hover:border-indigo-400 focus:bg-indigo-400 focus-visible:bg-indigo-400 disabled:bg-indigo-200 disabled:border-indigo-200',
        outline: 'bg-white text-indigo-600 hover:bg-indigo-100 hover:text-indigo-400 focus:bg-indigo-100 focus-visible:bg-indigo-100 disabled:bg-indigo-100 disabled:text-indigo-300 disabled:border-indigo-100',
        text: 'bg-transparent border-transparent text-gray-900 hover:bg-indigo-100 hover:text-indigo-400 focus:text-indigo-600 focus:border-indigo-600 focus-visible:text-indigo-600 focus-visible:border-indigo-600',
    };

    const classes = styleClasses[style];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`py-2 px-4 rounded cursor-pointer border-2 transition focus:outline-none focus-visible:outline-none disabled:pointer-events-none ${classes}`}
        >
            {text}
        </button>
    );
}
