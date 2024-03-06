export type IProps = {
    air_date: string,
    episode: string,
    id: number,
    name: string,
    url: string,
    characters: string[],
}

export type IPropsReq = {
  results: IProps[]
}

export type IPropsResultadoReq = {
  resultadoReq: IProps[],
  subtitulo: string
}