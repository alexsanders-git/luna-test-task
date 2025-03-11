import {useState} from "react";
import Select, {IOption} from "./select.tsx";
import usePokemon from "../hooks/usePokemon.ts";

export default function PokemonSelect() {
    // const {pokemonList, loading} = usePokemon(5);
    //
    // const options = pokemonList.map(pokemon => ({
    //     label: pokemon.name,
    //     value: pokemon.name
    // }));

    const options = [
        {label: "Pikachu", value: "1"},
        {label: "Bulbasaur", value: "2"},
        {label: "Charmander", value: "3"},
        {label: "Squirtle", value: "4"},
        {label: "Jigglypuff", value: "5"},
        {label: "Meowth", value: "6"},
        {label: "Psyduck", value: "7"},
        {label: "Snorlax", value: "8"},
        {label: "Eevee", value: "9"},
        {label: "Vulpix", value: "10"},
        {label: "Machop", value: "11"},
        {label: "Geodude", value: "12"},
        {label: "Onix", value: "13"},
        {label: "Zubat", value: "14"},
        {label: "Gastly", value: "15"},
        {label: "Lapras", value: "16"},
        {label: "Magikarp", value: "17"},
        {label: "Gengar", value: "18"},
        {label: "Jynx", value: "19"},
        {label: "Ditto", value: "20"},
    ];


    const [selectValue, setSelectValue] = useState<IOption | undefined>(options[0]);

    return (
        <Select options={options} value={selectValue} onChange={option => setSelectValue(option)}/>
    )
}
