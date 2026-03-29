const audiences = [
  {
    emoji: "🎓",
    title: "Ученикам",
    description:
      "Доступные объяснения сложных тем, интерактивные задания и материалы для самостоятельного изучения. Учиться интересно — когда есть правильный проводник.",
  },
  {
    emoji: "🤝",
    title: "Коллегам",
    description:
      "Методические разработки, идеи для уроков и профессиональный обмен опытом. Вместе мы создаём лучшую образовательную среду.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Родителям",
    description:
      "Прозрачность учебного процесса, советы по поддержке детей дома и открытый диалог с педагогом. Семья и школа — единая команда.",
  },
];

export default function Featured() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-white"
    >
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/0f1c8d80-ef5c-41bb-8e18-f9770cacba54/files/501403ff-e3c3-45af-9094-0f86dd74dce4.jpg"
          alt="Тоетов Сергей Эжерович"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">
          Чем полезен этот сайт
        </h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight font-light">
          Один сайт — три аудитории. Каждый найдёт здесь то, что нужно именно ему.
        </p>

        <div className="flex flex-col gap-8">
          {audiences.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <span className="text-3xl">{item.emoji}</span>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
