import { ShieldCheck, Headphones, Tag, Compass } from "lucide-react";

export default function WhyBook() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "Secure Payments",
      desc: "Your transactions are safe with our industry-leading encryption.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-600" />,
      title: "24/7 Support",
      desc: "Our team is here to help you around the clock with any questions.",
    },
    {
      icon: <Tag className="w-10 h-10 text-blue-600" />,
      title: "Best Prices",
      desc: "We guarantee the best prices on tickets for all our routes.",
    },
    {
      icon: <Compass className="w-10 h-10 text-blue-600" />,
      title: "Wide Selection",
      desc: "Choose from hundreds of operators and routes across the country.",
    },
  ];

  return (
    <section className="py-16 from-gray-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Why Book With Us?
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="p-4 rounded-full bg-blue-100 mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
