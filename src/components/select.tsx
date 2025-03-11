import {useEffect, useState} from "react";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/solid";
import IconButton from "./iconButton.tsx";

export type IOption = {
    label: string;
    value: string;
}

type ISingleProps = {
    multiple?: false;
    value?: IOption;
    onChange: (value: IOption | undefined) => void;
}

type IMultipleProps = {
    multiple: true;
    value: IOption[];
    onChange: (value: IOption[]) => void;
}

type IProps = {
    options: IOption[];
} & (ISingleProps | IMultipleProps);

export default function Select({multiple, value, options, onChange}: IProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0)

    const clearOptions = () => {
        multiple ? onChange([]) : onChange(undefined);
    }

    const selectOption = (option: IOption) => {
        if (multiple) {
            if (value.some(v => v.value === option.value)) {
                onChange(value.filter(o => o.value !== option.value));
            } else {
                onChange([...value, option]);
            }
        } else {
            if (option.value !== value?.value) {
                onChange(option);
            }
        }
    }

    const isOptionSelected = (option: IOption) => {
        if (multiple) {
            return value.some(v => v.value === option.value);
        } else {
            return value ? option.value === value.value : false;
        }
    }

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen])

    const error = false;
    const classes = `relative flex items-center gap-1 border rounded-lg p-3 leading-none focus:outline-none  ${error ? 'border-rose-500' : 'border-zinc-200 focus:border-indigo-600'}`;

    return (
        <div
            tabIndex={0}
            className={classes}
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
        >
            <span className="flex gap-2 grow capitalize">
                {multiple ? value.map(v => (
                    <button
                        key={v.value}
                        onClick={e => {
                            e.stopPropagation();
                            selectOption(v);
                        }}
                        className="flex items-center gap-1 py-1 px-2 text-sm bg-gray-200 rounded-xl cursor-pointer"
                    >
                        {v.label}
                        <span className="block size-[16px] text-gray-400">
                             <XMarkIcon/>
                        </span>
                    </button>
                )) : value?.label}
            </span>

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
