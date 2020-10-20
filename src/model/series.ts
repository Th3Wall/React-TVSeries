export interface Series {
    show: Show;
}

export interface Show {
    id: number,
    url: string,
    name: string,
    image: {medium: string}
}