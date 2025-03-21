import {useEffect, useRef, useState} from "react";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/solid";
import IconButton from "./iconButton.tsx";
import useClickOutside from "../hooks/useClickOutside.ts";

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
    label: string;
    options: IOption[];
} & (ISingleProps | IMultipleProps);

export default function Select({label, multiple, value, options, onChange}: IProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [highlightedIndex, setHighlightedIndex] = useState<number>(0)
    const [searchQuery, setSearchQuery] = useState<string>('');

    const containerRef = useRef<HTMLDivElement>(null);

    useClickOutside(containerRef, () => setIsOpen(false));

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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setIsOpen(true);
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen])

    const error = false;
    const classes = `relative flex items-center gap-1 mt-1 border rounded-lg p-3 leading-none focus:outline-none  ${error ? 'border-rose-500' : 'border-zinc-200 focus:border-indigo-600'}`;

    return (
        <div
            ref={containerRef}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col text-gray-700"
        >
            {label}
            <div className={classes} tabIndex={0}>
            <span className="flex flex-wrap gap-2 grow capitalize">
                {multiple ? value.map(v => (
                    <button
                        key={v.value}
                        onClick={e => {
                            e.stopPropagation();
                            selectOption(v);
                        }}
                        className="flex items-center gap-1 py-1 px-2 text-sm capitalize bg-gray-200 rounded-xl cursor-pointer"
                    >
                        {v.label}
                        <span className="block size-[16px] text-gray-400">
                             <XMarkIcon/>
                        </span>
                    </button>
                )) : value?.label}

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="focus:outline-none focus-visible:outline-none"
                />
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

                {isOpen && (
                    <ul
                        className="absolute left-0 top-[105%] w-full max-h-[150px] overflow-auto bg-white border rounded-lg border-zinc-200 z-100"
                    >
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
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
                                        setSearchQuery('');
                                        setIsOpen(false);
                                    }}
                                    onMouseEnter={() => setHighlightedIndex(index)}
                                >
                                    {option.label}
                                </li>
                            ))
                        ) : (
                            <li className="py-2 px-4 text-gray-500 capitalize">
                                No options
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}
