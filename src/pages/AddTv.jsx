import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTv } from "../features/tvs/tvSlice";

const AddTv = () => {

    const [formData, setFormData] = useState({
        customerName: '',
        contact: '',
        brand: '',
        size: '',
        problem: '',
    });

    const tvArr = useSelector(state => state.tv.tvArr)

    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("tvArr", JSON.stringify(tvArr))
    }, [tvArr])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTv(formData));
        setFormData({
            customerName: '',
            contact: '',
            brand: '',
            size: '',
            problem: '',
        })
    };


    return (
        <section>
            <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl border border-gray-200 w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    LED TV Service Request
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Customer name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="name">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            name="customerName"
                            id="name"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                    {/* Customer contact */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            type="number"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="1234567890"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                    {/* Brand Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="brand">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            name="brand"
                            id="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="e.g., Samsung, LG, Sony"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                    </div>
                    {/* TV Size */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="size">
                            TV Size (inches)
                        </label>
                        <input
                            type="number"
                            name="size"
                            id="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="e.g., 32, 43, 55"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"

                        />
                    </div>
                    {/* Problem */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1" htmlFor="problem">
                            Problem
                        </label>
                        <select
                            name="problem"
                            id="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"

                        >
                            <option value="" disabled>-- Select Problem --</option>
                            <option value="1" className="capitalize">motherboard</option>
                            <option value="2" className="capitalize">power suppy</option>
                            <option value="3" className="capitalize">back light</option>
                            <option value="4" className="capitalize">display</option>
                            <option value="5" className="capitalize">audio</option>
                        </select>
                    </div>
                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-lg hover:bg-emerald-700 transition duration-300"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddTv