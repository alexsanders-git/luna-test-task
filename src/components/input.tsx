interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'email' | 'password' | 'number';
    label: string;
    placeholder?: string;
    error?: string
}

export default function Input({type, label, placeholder, error, ...rest}: IProps) {
    const classes = `mt-1 border rounded-lg p-3 leading-none focus:outline-none  ${error ? 'border-rose-500' : 'border-zinc-200 focus:border-indigo-600'}`;

    return (
        <label className="flex flex-col text-gray-700">{label}
            <input
                type={type}
                placeholder={placeholder}
                className={classes}
                {...rest}
            />
            {error && <p className="text-rose-500 text-sm mt-1">{error}</p>}
        </label>
    )
}