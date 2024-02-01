import { useNavigate, useParams } from "react-router-dom";
import useShowsData from "../../hook/useShowsData";
import { useEffect, useState } from "react";
import BookTicket from "./BookTicket";

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

    // showing a loading state until find the specific data
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
                        src={renderMovie?.show?.image?.original}
                        alt={renderMovie?.show?.name}
                    />
                </div>
                <div className="space-y-3 my-6 md:my-0 md:w-1/2 lg:w-full">
                    <p className="text-2xl font-medium mb-4">{renderMovie?.show.name}</p>
                    <div className="flex gap-1">
                        <span className="font-medium">Genres: </span>
                        {renderMovie?.show?.genres.map((item, idx) => (
                            <p
                                key={idx}
                                className="max-w-fit px-2 bg-blue-500 text-white rounded-3xl flex items-center text-sm"
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                    <p>{cleanedSummary}</p>

                    <p className="font-medium">
                        <span>Language: </span>
                        {renderMovie?.show?.language}
                    </p>
                    {renderMovie?.show?.runtime && (
                        <p className="font-medium">
                            <span>Runtime: </span>
                            {renderMovie?.show?.runtime} minutes
                        </p>
                    )}

                    <p className="font-medium text-amber-600">
                        <span>Rating: </span>
                        {renderMovie?.show?.rating?.average
                            ? renderMovie?.show.rating.average
                            : "N/A"}
                    </p>
                    {renderMovie?.show?.status === "In Development" && (
                        <p className="font-medium text-lg text-red-500">
                            The Show Is In Development Process.
                        </p>
                    )}
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                        className="py-1 bg-[#ba181b] text-white px-4 rounded-sm font-medium"
                        onClick={() => document.getElementById("my_modal_3").showModal()}
                    >
                        Book Ticket
                    </button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/*a button for closing the modal manually*/}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <BookTicket name={renderMovie?.show?.name} />
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;
