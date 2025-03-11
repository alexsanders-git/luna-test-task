import {useEffect, useState} from "react";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/solid";
import IconButton from "./iconButton.tsx";

export interface IOption {
    label: string;
    value: string;
}

interface IProps {
    options: IOption[];
    value?: IOption;
    onChange: (value: IOption | undefined) => void
}

export default function Select({value, options, onChange}: IProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0)

    const clearOptions = () => {
        onChange(undefined);
    }

    const selectOption = (option: IOption) => {
        if (option !== value) onChange(option);
    }

    const isOptionSelected = (option: IOption) => {
        return value ? option.value === value.value : false;
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen])

    const error = false;
    const classes = `relative flex items-center gap-1 border rounded-lg p-3 leading-none focus:outline-none  ${error ? 'border-rose-500' : 'border-zinc-200 focus:border-indigo-600'}`;

    return (
        <div className={classes} tabIndex={0} onClick={() => setIsOpen(!isOpen)} onBlur={() => setIsOpen(false)}>
            <span className="grow capitalize">{value?.label}</span>

            <IconButton onClick={e => {
                e.stopPropagation();
                clearOptions();
            }}>
                <XMarkIcon/>
            </IconButton>

            <IconButton>
                <ChevronDownIcon/>
            </IconButton>

            <ul
                className={`absolute left-0 w-full max-h-[150px] top-[105%] bg-white overflow-auto border rounded-lg border-zinc-200 z-100 ${isOpen ? 'block' : 'hidden'}`}
            >
                {options.map((option, index) => (
                    <li
                        key={option.value}
                        data-selected={isOptionSelected(option)}
                        className={`py-2 px-4 capitalize cursor-pointer
                            ${isOptionSelected(option) ? 'bg-indigo-200' : ''}
                            ${index === highlightedIndex ? 'bg-indigo-300' : ''}
                        `}
                        onClick={e => {
                            e.stopPropagation();
                            selectOption(option);
                            setIsOpen(false);
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
