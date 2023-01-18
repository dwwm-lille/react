import { useState } from 'react';
import axios from 'axios';

function useBoolean() {
    let [show, setShow] = useState(false);
    let toggleShow = () => setShow(!show);

    return [show, toggleShow];
}

// on va chercher les données sur une url
function useFetch(url) {
    let [data, setData] = useState([]);
    // on prend 10 éléments (size) à partir de l'index 0 (start)
    let fetch = (size, start = 0) => {
        axios.get(url).then(response => {
            let newData = response.data;
            // Si size n'est pas défini, ça doit fonctionner
            size = size || newData.length;
            setData([...data, ...newData.slice(start, start + size)]);
        });
    };

    return [data, fetch];
}

export { useBoolean, useFetch };
