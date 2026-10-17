export default function SkillGroup({ title, containerClass, titleClass, itemTextSize, items }) {
  return (
    <div className={containerClass}>
      <span className={titleClass}>{title}</span>

      {items.map(({ name, icon, spacing = '' }) => (
        <div
          key={name}
          className={`flex flex-col items-center text-center ${itemTextSize} mt-4 ${spacing}`}
        >
          <img
            className="w-20 rounded-2xl transition-transform duration-500 hover:scale-110"
            src={icon}
            alt=""
          />
          <span className="mt-2">{name}</span>
        </div>
      ))}
    </div>
  )
}
