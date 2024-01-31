import axios from "axios";
import { useEffect, useState } from "react";

const useShowsData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((res) => {
            console.log(res);
            setData(res.data);
        });
    }, []);
    return [data];
};

export default useShowsData;
