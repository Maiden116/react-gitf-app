
import { useFetchGifts } from '../hooks/useFetchGifts';
import { GifComponent } from './GifComponent';

{/* {Gift Component Item} */ }
export const CategoryComponent = ({ category }) => {

    
    const {gifs, isLoading } = useFetchGifts(category)


    return (
        <>        
        <h3>{category}</h3>
        { isLoading && <p>...Loading</p>}
            <div className='card-grid'>
                {
                    gifs.map( (image ) => {
                        return <GifComponent 
                        key={image.id} 
                        {...image}/>
                    })
                }
            </div>
        </>
    )
}
