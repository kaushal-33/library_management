import {
    Monitor, Zap, MessageSquare, Eye, Clipboard,
    Smartphone, Shield, CheckCircle, Star, ArrowRight
} from 'lucide-react';

const services = [
    {
        id: 1,
        icon: Monitor,
        title: "LED Panel Replacement",
        description: "Professional replacement of damaged LED panels with genuine parts for all major brands.",
        features: ["Genuine Parts", "All Major Brands", "Color Accuracy Test"],
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        id: 2,
        icon: Zap,
        title: "Power Supply Repair",
        description: "Diagnosis and repair of power supply issues including no power, intermittent power, etc.",
        features: ["Circuit Analysis", "Voltage Testing", "Component Replacement"],
        gradient: "from-purple-500 to-pink-400"
    },
    {
        id: 3,
        icon: MessageSquare,
        title: "Main Board Repair",
        description: "Expert repair of main board issues including no display, freezing, software problems.",
        features: ["Chip-Level Repair", "Software Recovery", "Performance Optimization"],
        gradient: "from-green-500 to-teal-400"
    },
    {
        id: 4,
        icon: Eye,
        title: "Backlight Repair",
        description: "Fix for dark screen issues including LED strip replacement and backlight circuit repair.",
        features: ["LED Strip Replacement", "Brightness Calibration", "Uniform Illumination"],
        gradient: "from-orange-500 to-red-400"
    },
    {
        id: 5,
        icon: Clipboard,
        title: "Software Update",
        description: "Firmware updates and software troubleshooting for smart TV features and performance.",
        features: ["Latest Firmware", "Smart TV Features", "Performance Boost"],
        gradient: "from-indigo-500 to-purple-400"
    },
    {
        id: 6,
        icon: Smartphone,
        title: "General Diagnosis",
        description: "Comprehensive TV health check to identify any existing or potential issues.",
        features: ["Full System Scan", "Performance Report", "Preventive Care"],
        gradient: "from-pink-500 to-rose-400"
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6">
                        <Monitor className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold  mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Our Premium Services
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Professional TV repair solutions with cutting-edge technology and unmatched expertise.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map(({ id, icon: Icon, title, description, features, gradient }) => (
                        <div key={id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl mb-6`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
                            <p className="text-gray-300 mb-6">{description}</p>
                            <ul className="space-y-2 mb-6">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-400">
                                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition">
                                <span className="font-semibold">Learn More</span>
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Warranty Section */}
                <div className="relative mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl blur-xl" />
                    <div className="relative bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-8">
                        <div className="flex flex-col lg:flex-row items-center gap-6">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full">
                                <Shield className="w-10 h-10 text-white" />
                            </div>
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-3xl font-bold text-white mb-3">90-Day Premium Warranty</h3>
                                <p className="text-gray-300 text-lg">
                                    All services include a 90-day warranty on parts and labor using genuine components.
                                </p>
                            </div>
                            <div className="text-sm text-gray-400 text-center lg:text-right">
                                <div className="flex justify-center lg:justify-end mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                Guaranteed Quality
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
                        <span>Get Free Diagnosis</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <p className="text-gray-400 mt-4">Same-day service • Free checkup • 24/7 support</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
