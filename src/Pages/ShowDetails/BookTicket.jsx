import { useState } from "react";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
const BookTicket = ({ name }) => {
    const [price, setPrice] = useState("100$");
    const handleBookTicket = (e) => {
        e.preventDefault();
        //getting form values
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const date = formData.get("date");

        //creating a booking object
        const bookingInfo = {
            movieName: name,
            price,
            userEmail: email,
            bookingDate: date,
        };

        // Saving booking info to local storage
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(bookingInfo);
        localStorage.setItem("bookings", JSON.stringify(bookings));
        toast.success("Data Successfully Added To Local Storage!");

        e.target.reset();
    };
    return (
        <div>
            <form onSubmit={handleBookTicket}>
                <Toaster />
                <div className="space-y-2">
                    <div className="form-control">
                        <label className="mb-1">Movie Name</label>
                        <input
                            disabled
                            name="movieName"
                            type="text"
                            defaultValue={name}
                            className="input input-bordered focus:outline-none bg-white text-mainBg"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="mb-1">Price</label>
                        <input
                            disabled
                            name="price"
                            type="text"
                            defaultValue={price}
                            className="input input-bordered focus:outline-none bg-white text-mainBg"
                            required
                        />
                    </div>
                    <div className="form-control ">
                        <label className="mb-1">Your Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Your Email"
                            className="input input-bordered focus:outline-none bg-white text-mainBg"
                            required
                        />
                    </div>
                    <div className="form-control pb-3">
                        <label className="mb-1">Booking Date</label>
                        <input
                            name="date"
                            type="date"
                            className="input input-bordered focus:outline-none bg-white text-mainBg"
                            required
                        />
                    </div>

                    <button className="bg-amber-600 text-white px-4 py-2 rounded font-semibold w-full ">
                        Confirm Booking
                    </button>
                </div>
            </form>
        </div>
    );
};
BookTicket.propTypes = {
    name: PropTypes.string,
};
export default BookTicket;
