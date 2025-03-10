interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'text' | 'email' | 'password' | 'number';
    label: string;
    placeholder?: string;
}

export default function Input({type, label, placeholder, ...rest}: IProps) {

    return (
        <label className="flex flex-col gap-2 text-gray-700">{label}
            <input
                type={type}
                placeholder={placeholder}
                className="border rounded-lg border-zinc-200 p-3 leading-none focus:outline-none focus:border-indigo-600"
                {...rest}
            />
        </label>
    )
}