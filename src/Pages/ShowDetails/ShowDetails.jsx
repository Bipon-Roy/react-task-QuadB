import { useNavigate, useParams } from "react-router-dom";
import useShowsData from "../../hook/useShowsData";
import { useEffect, useState } from "react";

const ShowDetails = () => {
    const [data] = useShowsData();
    const [loading, setLoading] = useState(true);
    const [renderMovie, setRenderMovie] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    //finding the specific movie show data
    useEffect(() => {
        const movie = data.find((movie) => movie.show.id == id);
        setRenderMovie(movie);
        setLoading(false);
    }, [data, id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }
    const summary = renderMovie?.show?.summary;
    const cleanedSummary = summary?.replace(/<\/?p>|<\/?b>/g, "");
    return (
        <div className="max-w-7xl mx-auto mt-8 relative my-8">
            {/* Back button to navigate home page */}
            <button
                onClick={() => navigate(-1)}
                className="absolute top-[410px] right-5 md:top-0 lg:right-0 rounded-md font-medium px-2 py-1 bg-zinc-100"
            >
                Back
            </button>
            <div className="flex flex-col md:flex-row mx-6 lg:mx-0 gap-5 lg:gap-8">
                <div className="rounded-xl md:w-1/2 lg:w-[680px] lg:h-[500px]">
                    <img
                        className="h-[400px] w-full md:h-full "
                        src={renderMovie?.show.image.original}
                        alt={renderMovie?.show.name}
                    />
                </div>
                <div className="space-y-4 my-6 md:my-0 md:w-1/2 lg:w-full">
                    <p className="text-2xl font-medium mb-4">{renderMovie?.show.name}</p>
                    <div className="flex gap-1">
                        <span className="font-medium">Genres: </span>
                        {renderMovie?.show.genres.map((item, idx) => (
                            <p
                                key={idx}
                                className="max-w-fit px-2 bg-blue-500 text-white rounded-3xl flex items-center text-sm"
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                    <p>{cleanedSummary}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
