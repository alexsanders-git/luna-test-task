import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import {ITrainer} from "../types.ts";

interface IState {
    trainer: ITrainer | null;
    setTrainer: (trainer: ITrainer) => void;
}

export const useTrainerStore = create<IState>()(
    devtools(
        persist(
            (set) => ({
                trainer: null,
                setTrainer: (trainer) =>
                    set({trainer}),
            }),
            {name: 'trainer'}
        )
    )
)