export type Track = {
    id: number
    name: string
    artist: string
    album?: string
}
export type playlist = {
    id: number
    name: string
    tracks: Track[]
}