import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTv } from "../features/tvs/tvSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTv = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        contact: '',
        brand: '',
        size: '',
        problem: '',
    });

    const [error, setError] = useState({
        customerName: '',
        contact: '',
        brand: '',
        size: '',
        problem: '',
    });

    const tvArr = useSelector(state => state.tv.tvArr);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("tvArr", JSON.stringify(tvArr));
    }, [tvArr]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError({ ...error, [name]: "" });
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = {};

        if (!formData.customerName.trim()) validationError.customerName = "Enter Your Name...!";
        if (!formData.contact.trim() || formData.contact.length !== 10) validationError.contact = "Enter valid Contact...!";
        if (!formData.brand.trim()) validationError.brand = "Enter Your T.V Brand...!";
        if (!formData.size.trim()) validationError.size = "Enter Your T.V Size...!";
        if (!formData.problem.trim()) validationError.problem = "Select T.V fault...!";

        setError(validationError);
        if (Object.keys(validationError).length > 0) return;

        dispatch(addTv(formData));
        setFormData({ customerName: '', contact: '', brand: '', size: '', problem: '' });
        toast.success("New T.V added...!");
        navigate("/");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
            <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg border">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    LED TV Service Request
                </h2>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    {/* Name */}
                    <div>
                        <label htmlFor="customerName" className="text-sm font-medium">
                            Customer Name
                        </label>
                        <input
                            type="text"
                            name="customerName"
                            id="customerName"
                            value={formData.customerName}
                            onChange={handleChange}
                            placeholder="Name"
                            className={`w-full px-4 py-2 mt-1 outline-0 rounded-md border ${error.customerName ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
                        />
                        {error.customerName && <p className="text-xs text-red-500 mt-1">{error.customerName}</p>}
                    </div>

                    {/* Contact */}
                    <div>
                        <label htmlFor="contact" className="text-sm font-medium">
                            Contact
                        </label>
                        <input
                            type="number"
                            name="contact"
                            id="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="1234567890"
                            className={`w-full px-4 py-2 mt-1 outline-0 rounded-md border ${error.contact ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
                        />
                        {error.contact && <p className="text-xs text-red-500 mt-1">{error.contact}</p>}
                    </div>

                    {/* Brand */}
                    <div>
                        <label htmlFor="brand" className="text-sm font-medium">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            name="brand"
                            id="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="Samsung, LG, Sony"
                            className={`w-full px-4 py-2 mt-1 outline-0 rounded-md border ${error.brand ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
                        />
                        {error.brand && <p className="text-xs text-red-500 mt-1">{error.brand}</p>}
                    </div>

                    {/* TV Size */}
                    <div>
                        <label htmlFor="size" className="text-sm font-medium">
                            TV Size (inches)
                        </label>
                        <input
                            type="number"
                            name="size"
                            id="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="32, 43, 55"
                            className={`w-full px-4 py-2 mt-1 outline-0 rounded-md border ${error.size ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
                        />
                        {error.size && <p className="text-xs text-red-500 mt-1">{error.size}</p>}
                    </div>

                    {/* Problem */}
                    <div className="md:col-span-2">
                        <label htmlFor="problem" className="text-sm font-medium">
                            Problem
                        </label>
                        <select
                            name="problem"
                            id="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 mt-1 outline-0 rounded-md border ${error.problem ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-400`}
                        >
                            <option value="" disabled>-- Select Problem --</option>
                            <option value="1">Motherboard</option>
                            <option value="2">Power Supply</option>
                            <option value="3">Back Light</option>
                            <option value="4">Display</option>
                            <option value="5">Audio</option>
                        </select>
                        {error.problem && <p className="text-xs text-red-500 mt-1">{error.problem}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 pt-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddTv;
