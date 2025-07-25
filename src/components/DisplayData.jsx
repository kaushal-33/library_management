import { useDispatch, useSelector } from "react-redux"
import { Edit, Trash2, Phone, User, Settings, Monitor, IndianRupeeIcon } from "lucide-react"
import { confirmDeliveryAmount, deleteTv } from "../features/tvs/tvSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const DisplayData = () => {
    const [isPopOverOpen, setIsPopoverOpen] = useState(false);
    const [confirmDelivery, setConfirmDelivery] = useState({})
    const [confirmAmount, setConfirmAmount] = useState(" ")
    const [searchQuery, setSearchQuery] = useState("");
    const tvArr = useSelector(state => state.tv.tvArr)
    let filteredData = [];
    const dispatch = useDispatch();
    const getFault = (value) => {
        switch (value) {
            case "1": return "mother board";
            case "2": return "power supply";
            case "3": return "back light";
            case "4": return "display";
            case "5": return "audio";
        }
    }

    const handleConfirm = (id) => {
        if (confirmAmount <= 0 || confirmAmount === "") {
            toast.error("Enter valid amount...!")
        } else {
            dispatch(confirmDeliveryAmount({ id, confirmAmount }))
            setConfirmAmount("")
            setIsPopoverOpen(false)
        }
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value.toLowerCase())
    }

    if (searchQuery !== "") {
        filteredData = tvArr.filter(customer =>
            customer.customerName.toLowerCase().includes(searchQuery) ||
            customer.contact.toLowerCase().includes(searchQuery) ||
            customer.brand.toLowerCase().includes(searchQuery)
        );
    } else {
        filteredData = tvArr;
    }


    return (
        <div className="w-full max-w-7xl mx-auto mt-8 pb-8 px-4">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Monitor className="w-6 h-6" />
                            TV Service Records
                        </h2>
                        <p className="text-blue-100 text-sm mt-1">Manage customer service requests and payments</p>
                    </div>
                    <div className="w-3/12">
                        <input type="text" onChange={handleSearch} placeholder="🔎 Search" className="w-full border-0 outline-0 border-b border-white text-white pb-1 px-2 focus:shadow rounded-lg" />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer Info</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">T.V Details</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Problem Description</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">delivery Status</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredData.map((customer, idx) => (
                                <tr
                                    key={customer.id}
                                    className={`hover:bg-gray-50 transition-colors border-l-4`}
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <div className="font-medium text-gray-900 mb-1">{new Date(customer.date).toDateString()}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-2 mb-1">
                                                <User className="w-4 h-4 text-gray-400" />
                                                <span className="font-semibold text-gray-900 capitalize">{customer.customerName}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="w-4 h-4" />
                                                <span>{customer.contact}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <div className="font-medium text-gray-900 mb-1 uppercase">{customer.brand}</div>
                                            <div className="text-sm text-gray-600 flex items-center gap-1">
                                                <Monitor className="w-4 h-4" />
                                                <span className="">{customer.size}"</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900 max-w-xs">
                                            <div className="flex items-start gap-2">
                                                <Settings className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                                <span className="line-clamp-2 capitalize">{getFault(customer.problem)}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span
                                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${customer.status === "pending" ? "bg-orange-400 text-white" : "bg-green-400 text-white"}`}
                                        >
                                            {customer.status}
                                        </span>

                                        {customer.amount && (
                                            <div className="text-center">
                                                <div className="mt-1 text-sm font-semibold text-gray-800 flex justify-center items-center gap-1">
                                                    <IndianRupeeIcon className="w-4 h-4 text-gray-600" />
                                                    <span>{Number(customer.amount).toLocaleString()}</span>

                                                </div>
                                                <div className="text-[12px]">{new Date(customer.deliveryDate).toDateString()}</div>
                                            </div>
                                        )}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => {
                                                setConfirmDelivery(customer)
                                                setIsPopoverOpen(!isPopOverOpen)
                                            }}
                                                className="p-2 relative text-green-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-colors cursor-pointer"
                                                title="Confirm Delivery"
                                            >
                                                <IndianRupeeIcon className="w-4 h-4" />
                                            </button>
                                            <Link to={`update_tv/${idx}`}
                                                className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors"
                                                title="Edit Record"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Link>
                                            <button onClick={() => dispatch(deleteTv(customer.id))}
                                                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
                                                title="Delete Record"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <Monitor className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No service records found</h3>
                        <p className="text-gray-600">Add your first TV service record to get started.</p>
                    </div>
                )}

                {/* popover */}
                {isPopOverOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity">
                        <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 mx-4 animate-fade-in">
                            <div className="text-end pb-2 border-b border-green-500">
                                <button
                                    onClick={() => setIsPopoverOpen(false)}
                                    className="cursor-pointer"
                                >
                                    ❌
                                </button>
                            </div>
                            <div className="text-xl font-semibold text-white py-2 text-center uppercase rounded-md mb-4 mt-1 bg-green-500">
                                <span>Confirm Payment</span>
                            </div>

                            <div className="flex flex-col gap-3 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Customer Name</span>
                                    <span className="font-medium capitalize">{confirmDelivery?.customerName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Brand</span>
                                    <span className="font-medium uppercase">{confirmDelivery?.brand}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Size</span>
                                    <span className="font-medium">{confirmDelivery?.size}"</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Problem</span>
                                    <span className="capitalize max-w-[150px] text-right">{getFault(confirmDelivery?.problem)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <label htmlFor="amount" className="capitalize">amount</label>
                                    <input type="number" id="amount" value={confirmAmount} onChange={(e) => setConfirmAmount(Number(e.target.value))} placeholder="₹ 00,000" className="focus:outline-0 pb-1 border-b border-green-500 font-bold" />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end gap-3">
                                <button
                                    onClick={() => {
                                        handleConfirm(confirmDelivery?.id);
                                    }}
                                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default DisplayData