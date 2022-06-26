export type Track = {
    id: number
    name: string
    artist: string
    album?: string
    url: string
}
export type Playlist = {
    id: number
    name: string
    tracks: Track[]
}
export type PlayedTrack = {
    name: string
    url: string
}