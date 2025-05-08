
import { useEffect,useState } from "react"
import {getGif} from '../helpers/GetGifs'



export const GifGrid = ({category}) => {

    const  [dataGif, setdataGif] = useState([])
    const [loading, setLoading] = useState(true)

    
    const fetchGifs = async () => {
        setLoading(true)
        const gifs = await getGif(category)
        setdataGif(gifs)
        setLoading(false)
      }

    useEffect(() => {
        fetchGifs()
      }, [])

  return (
    <>

    <div>
      <h3>{category}</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-grid">
          {dataGif.map(({ id, gif, title }) => (
            <div key={`${id}-${title}`} className="card">
              <img src={gif} alt={title} className="fixed-size-img" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
