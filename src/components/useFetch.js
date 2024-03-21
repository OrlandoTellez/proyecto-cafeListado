import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
                setLoading(false);
            })
    }, [])

    

    return {data, loading};
}

