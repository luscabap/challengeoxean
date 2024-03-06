import axios from "axios";
import { IPropsReq } from '../interface/IPropsRequisicao';

export const requisicaoRickMortyEpisodios = async () => {
    const { data } = await axios.get<IPropsReq>("https://rickandmortyapi.com/api/episode");
    return data;
};

export const requisicaoRickMortyPersonanges = async () => {
    const { data } = await axios.get("https://rickandmortyapi.com/api/character");
    return data;
}
