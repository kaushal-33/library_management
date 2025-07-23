import { useSelector } from "react-redux"
import { Edit, Trash2, DollarSign, Phone, User, Settings, Monitor } from "lucide-react"

const DisplayData = () => {
    const tvArr = useSelector(state => state.tv.tvArr)

    const getFault = (value) => {
        switch (value) {
            case "1": return "mother board";
            case "2": return "power supply";
            case "3": return "back light";
            case "4": return "display";
            case "5": return "audio";
        }
    }

    return (
        <div className="w-full max-w-7xl mx-auto mt-8 px-4">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <Monitor className="w-6 h-6" />
                        TV Service Records
                    </h2>
                    <p className="text-blue-100 text-sm mt-1">Manage customer service requests and payments</p>
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
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">payment Status</th>
                                <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {tvArr.map((customer) => (
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
                                                <span className="font-semibold text-gray-900">{customer.customerName}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="w-4 h-4" />
                                                <span>{customer.contact}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <div className="font-medium text-gray-900 mb-1">{customer.brand}</div>
                                            <div className="text-sm text-gray-600 flex items-center gap-1">
                                                <Monitor className="w-4 h-4" />
                                                <span>{customer.size}"</span>
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
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                className="p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition-colors"
                                                title="Confirm Payment"
                                            >
                                                <DollarSign className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition-colors"
                                                title="Edit Record"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </button>
                                            <button
                                                className="p-2 text-red-600 hover:text-red-800 hover:bg-red-100 rounded-lg transition-colors"
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
                {tvArr.length === 0 && (
                    <div className="text-center py-12">
                        <Monitor className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No service records found</h3>
                        <p className="text-gray-600">Add your first TV service record to get started.</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default DisplayData