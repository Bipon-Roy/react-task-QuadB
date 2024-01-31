import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Recipe Card
const Cards = ({ show }) => {
    const { id, name, image, status, premiered, ended, genres } = show.show; //destructuring properties
    console.log(show.show);
    return (
        <div className="flex flex-col shadow rounded-md">
            <div className="flex justify-center">
                <img
                    className="w-full object-fill h-[250px] rounded-t-md"
                    src={image?.medium}
                    alt={name}
                />
            </div>

            <div className="flex-grow mt-3 space-y-2 text-sm md:text-base px-4">
                <div className="flex gap-1">
                    <span className="font-medium">Genres: </span>
                    {genres.map((item, idx) => (
                        <p
                            key={idx}
                            className="max-w-fit px-2 bg-blue-500 text-white rounded-3xl flex items-center text-sm"
                        >
                            {item}
                        </p>
                    ))}
                </div>
                <p className="font-medium">
                    <span>Premiered: </span>
                    {premiered ? premiered : "N/A"}
                </p>
                <p className="font-medium">
                    <span>Ended: </span>
                    {ended ? ended : "N/A"}
                </p>

                <p
                    className={`${
                        status === "Ended" ? "text-red-600" : "text-green-500"
                    } font-semibold`}
                >
                    <span className="text-black">Status: </span>
                    {status}
                </p>
            </div>
            <div className="px-4 my-3">
                <Link to={`/showDetails/${id}`}>
                    <button className="py-1 bg-[#ba181b] text-white w-full rounded-md font-medium">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};
Cards.propTypes = {
    show: PropTypes.object.isRequired,
};
export default Cards;
