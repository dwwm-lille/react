import { useEffect, useState } from 'react';
import { useFetch } from '../hooks';

function Photos() {
    let [photos, fetchPhotos] = useFetch('https://jsonplaceholder.typicode.com/photos');
    let [start, setStart] = useState(10);

    useEffect(() => {
        fetchPhotos(10);
    }, []);

    let handleClick = () => {
        setStart(start + 10);
        fetchPhotos(10, start);
    }

    return (
        <div>
            {photos.map(photo =>
                <div key={photo.id}>
                    {JSON.stringify(photo)}
                </div>
            )}
            <button onClick={handleClick}>Suite</button>
        </div>
    );
}

export default Photos;
