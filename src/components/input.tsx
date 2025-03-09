
interface IProps {
    type: 'text' | 'email' | 'password' | 'number';
    name: string;
    label: string;
    placeholder?: string;
}

export default function Input(props: IProps) {

    return (
        <div className="flex flex-col">
            <label htmlFor={props.name} className="mb-2 text-gray-700">{props.label}</label>
            <input
                id={props.name}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                className="border rounded-lg border-zinc-200 p-3 leading-none focus:outline-none focus:border-indigo-600"
            />
        </div>
    )
}