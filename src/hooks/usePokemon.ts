import {useEffect, useState} from 'react';
import axios from 'axios';

interface IPokemon {
    name: string;
    url: string;
}

const usePokemon = (limit: number = 1000) => {
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true);

                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);

                setPokemonList(response.data.results);
            } catch (err) {
                if (axios.isAxiosError(err) && err.message) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [limit]);

    return {pokemonList, loading, error};
};

export default usePokemon;
