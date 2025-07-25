import { useSelector } from "react-redux"
import { Monitor, Clock, CheckCircle2 } from "lucide-react"

const TvAccounts = () => {
    const { tvArr } = useSelector(state => state.tv)

    const total = tvArr.length
    const pending = tvArr.filter(tv => tv.status === "pending").length
    const completed = tvArr.filter(tv => tv.status === "completed").length

    const cardData = [
        {
            title: "Total T.Vs",
            count: total,
            color: "blue",
            icon: <Monitor className="w-6 h-6 text-blue-600" />,
            border: "border-l-4 border-blue-500"
        },
        {
            title: "Pending T.Vs",
            count: pending,
            color: "yellow",
            icon: <Clock className="w-6 h-6 text-yellow-500" />,
            border: "border-l-4 border-yellow-400"
        },
        {
            title: "Completed T.Vs",
            count: completed,
            color: "green",
            icon: <CheckCircle2 className="w-6 h-6 text-green-600" />,
            border: "border-l-4 border-green-500"
        }
    ]

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">TV Accounts Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cardData.map((card, idx) => (
                    <div
                        key={idx}
                        className={`bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${card.border}`}
                    >
                        <div className="flex items-center gap-4 mb-2">
                            {card.icon}
                            <h3 className="text-lg font-semibold text-gray-700">{card.title}</h3>
                        </div>
                        <p className={`text-3xl font-bold text-${card.color}-600`}>{card.count}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TvAccounts
