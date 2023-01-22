
import { useEffect, useState } from 'react';
import { getGifts } from '../helpers/fetchGift'



export const useFetchGifts = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifts(category);
        console.log(newImages);
        setGifs(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category)
    }, [])

    return {
        gifs,
        isLoading,
    }
}
