import axios from "axios";
import { useEffect, useState } from "react";

const useShowsData = () => {
    const [data, setData] = useState([]);
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
