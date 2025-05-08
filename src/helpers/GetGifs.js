import axios from "axios"
export const getGif = async (category) =>{
    const gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=kHQuHckO8mT2Teg9twdLLOVbfdwvLykl&q=${category}&limit=10`)
    const {data} = gifs.data
    
    const gifsFormatted = data.map(dat => ({
        id: dat.id,
        gif: dat.images?.downsized_medium?.url,
        title: dat.title
      }))

    return gifsFormatted
}