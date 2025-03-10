import {XMarkIcon} from "@heroicons/react/24/solid"
import IconButton from "./iconButton.tsx";

interface IProps {
    onClick?: () => void;
}

export default function Modal({onClick}: IProps) {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center p-6 bg-slate-900/85 cursor-pointer"
            onClick={onClick}
        >
            <div className="relative w-3xl p-4 bg-white rounded cursor-auto" onClick={(e) => e.stopPropagation()}>
                <IconButton
                    className="absolute top-3 right-3"
                    onClick={onClick}
                >
                    <XMarkIcon/>
                </IconButton>
                MODAL
            </div>
        </div>
    )
}