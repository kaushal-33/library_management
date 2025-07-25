import { useSelector } from "react-redux"
import { Monitor, Clock, User, Settings, Calendar } from "lucide-react"

const MostRecentTv = () => {

    const tvArr = useSelector(state => state.tv.tvArr)
    let recentTv = [...tvArr].sort((a, b) => a.date - b.date).find((tv) => tv.status === "pending")
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
        <div className="h-full">
            {recentTv ?
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Most awaited pending TV
                    </h3>
                    <div className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-500" />
                            <span className="capitalize font-medium">{recentTv.customerName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Monitor className="w-4 h-4 text-gray-500" />
                            <span className="uppercase">{recentTv.brand} - {recentTv.size}"</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-gray-500" />
                            <span className="capitalize">{getFault(recentTv.problem)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span>{new Date(recentTv.date).toDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs px-3 py-1 rounded-full capitalize text-white bg-orange-400">
                                {recentTv.status}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span>{recentTv.contact}</span>
                        </div>
                    </div>
                </div>
                : <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Most awaited pending TV
                    </h3>
                    <div className="uppercase text-center font-bold text-green-800">
                        none
                    </div>
                </div>
            }
        </div>
    )
}

export default MostRecentTv