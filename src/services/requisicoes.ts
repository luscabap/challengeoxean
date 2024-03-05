import axios from "axios";
import { IPropsReq } from '../interface/IPropsRequisicao';

export const requisicaoRickMorty = async () => {
    const { data } = await axios.get<IPropsReq>("https://rickandmortyapi.com/api/episode");
    return data;
};
