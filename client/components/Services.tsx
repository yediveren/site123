interface ServiceCardProps {
  title: string;
  description: string;
  color: string;
  icon: string;
}

function ServiceCard({ title, description, color, icon }: ServiceCardProps) {
  return (
    <div
      className={`${color} text-white rounded-3xl p-8 h-80 flex flex-col relative overflow-hidden`}
    >
      <div className="flex-1">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg opacity-90 leading-relaxed">{description}</p>
      </div>

      {/* Icon/decoration at bottom */}
      <div className="mt-4 flex justify-center">
        <div className="text-6xl lg:text-7xl opacity-30 font-bold">{icon}</div>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: "Konuşma Terapisi",
      description: "Konuşma zorluğu olan bireyler için konuşma terapi programı",
      color: "bg-brand-blue",
      icon: "🗣️",
    },
    {
      title: "Özel Öğretim",
      description: "Öğrenme güçlüğü olan bireyler için özel öğretim programı",
      color: "bg-brand-lime",
      icon: "📚",
    },
    {
      title: "Matematik Öğretimi",
      description:
        "Matematik öğrenme güçlüğü olan bireyler için matematik eğitim programı",
      color: "bg-brand-orange",
      icon: "🔢",
    },
    {
      title: "Ergoterapi",
      description:
        "Özel Öğrenme Güçlüğü olan bireyler için Ergoterapi müdahale programı",
      color: "bg-brand-pink",
      icon: "🤲",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
