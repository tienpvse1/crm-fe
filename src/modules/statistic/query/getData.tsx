import { useState } from "react";

export const asyncFetch = () => {
    const [data, setData] = useState([]);
    fetch('')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
            console.log('fetch data failed', error);
        });
    return { data, fetch };
};