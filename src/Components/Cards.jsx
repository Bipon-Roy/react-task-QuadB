import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Recipe Card
const Cards = ({ show }) => {
    const { id, name, image, status } = show.show; //destructuring properties
    console.log(status);
    return (
        <div className="flex flex-col shadow rounded-md">
            <div className="flex justify-center">
                <img
                    className="w-full object-fill h-[300px] rounded-t-md"
                    src={image?.medium}
                    alt={name}
                />
            </div>

            <div className="flex-grow mt-3  text-sm md:text-base px-4">
                <p
                    className={`${
                        status === "Ended" ? "text-red-600" : "text-green-600"
                    } font-medium`}
                >
                    <span className="text-black">Status: </span>
                    {status}
                </p>
            </div>
            <div className="px-4 my-3">
                <Link to={`/showDetails/${id}`}>
                    <button className="py-1 bg-purple-600 text-white w-full rounded-md font-medium">
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
