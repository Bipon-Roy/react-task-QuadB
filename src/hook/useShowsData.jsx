import axios from "axios";
import { useEffect, useState } from "react";
// custom hook for providing the data to every component
const useShowsData = () => {
    const [data, setData] = useState([]);
    //providing a loading state until get the data from api
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
            setData(res.data);
            setLoading(false);
        });
    }, []);

    return [data, loading];
};

export default useShowsData;
