import { FaBusAlt, FaPlane, FaShip, FaTrain } from "react-icons/fa";

export default function PopularRoutes() {
  const routes = [
    {
      type: "Bus",
      icon: <FaBusAlt />,
      routes: [
        "Dhaka → Chittagong",
        "Dhaka → Cox's Bazar",
        "Dhaka → Sylhet",
      ],
      gradient: "from-orange-400 to-red-500",
    },
    {
      type: "Plane",
      icon: <FaPlane />,
      routes: [
        "Dhaka → Chittagong",
        "Dhaka → Cox's Bazar",
        "Dhaka → Sylhet",
      ],
      gradient: "from-sky-400 to-blue-500",
    },
    {
      type: "Train",
      icon: <FaTrain />,
      routes: [
        "Dhaka → Chittagong",
        "Dhaka → Sylhet",
        "Dhaka → Rajshahi",
      ],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      type: "Launch",
      icon: <FaShip />,
      routes: [
        "Dhaka → Barisal",
        "Dhaka → Bhola",
        "Dhaka → Chandpur",
      ],
      gradient: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Popular Routes
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Discover the most traveled routes across the country
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {routes.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur rounded-2xl p-6 shadow-md hover:shadow-2xl 
                         transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl 
                            bg-gradient-to-r ${item.gradient} text-white text-2xl mb-5`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {item.type}
              </h3>

              {/* Routes */}
              <ul className="space-y-2 text-gray-600 text-sm">
                {item.routes.map((route, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 group-hover:text-gray-800 transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                    {route}
                  </li>
                ))}
              </ul>

              {/* Bottom line */}
              <div
                className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} 
                            rounded-full mt-6 transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
