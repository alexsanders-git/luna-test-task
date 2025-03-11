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
                <div>Loading...</div>
            ) : (
                <Select multiple options={options} value={selectValue} onChange={option => setSelectValue(option)}/>
            )}
        </>

    )
}
