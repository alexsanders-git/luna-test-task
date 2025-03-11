import {useState} from "react";
import Select, {IOption} from "./select.tsx";
import usePokemon from "../hooks/usePokemon.ts";

export default function PokemonSelect() {
    const {pokemonList, loading} = usePokemon(50);

    const options = pokemonList.map(pokemon => ({
        label: pokemon.name,
        value: pokemon.name
    }));

    const [selectValue, setSelectValue] = useState<IOption[]>([]);

    return (
        <>
            {loading ? (
                <div>
                    <div className="w-[100px] h-[20px] mb-1 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-full h-[48px] bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
            ) : (
                <Select label="Select your team" multiple options={options} value={selectValue}
                        onChange={option => setSelectValue(option)}/>
            )}
        </>

    )
}
