import { useState } from 'react';

function useBoolean() {
    let [show, setShow] = useState(false);
    let toggleShow = () => setShow(!show);

    return [show, toggleShow];
}

export { useBoolean };
