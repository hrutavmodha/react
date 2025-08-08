type parseType = 'json' | 'text' | 'blob' | 'arrayBuffer'
const parser: Record<parseType, (res: Response) => Promise<any>> = {
    json: (res) => res.json(),
    text: (res) => res.json(),
    blob: (res) => res.blob(),
    arrayBuffer: (res) => res.arrayBuffer()
}
export default async function useFetch(
    url: string,
    options?: RequestInit,
    parseAs: parseType = 'json'
): Promise<any> {
    try {
        const res = await fetch(url, options)
        const data = await parser[parseAs](res)
        return data
    }
    catch (error) {
        return error
    }
}