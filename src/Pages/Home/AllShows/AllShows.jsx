import Cards from "../../../Components/Cards";
import useShowsData from "../../../hook/useShowsData";

const AllShows = () => {
    const [data] = useShowsData();
    return (
        <div>
            <h1 className="text-center font-semibold text-2xl uppercase mt-5">All Shows </h1>
            <div className="grid mx-6 md:grid-cols-2 lg:grid-cols-4 my-8 gap-5">
                {data.map((show) => (
                    <Cards key={show.show.id} show={show} />
                ))}
            </div>
        </div>
    );
};

export default AllShows;
