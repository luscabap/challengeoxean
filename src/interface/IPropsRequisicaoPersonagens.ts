export type IPropsPersonagens = {
    created?: string,
    episode?: string[],
    gender: string,
    id?: number,
    image: string,
    location?: string[]
    name: string,
    origin?: string[],
    species: string,
    status: string
    type?: string,
    url?: string
}

export type IPropsPersonagensResposta = {
    personagens: IPropsPersonagens[]
}