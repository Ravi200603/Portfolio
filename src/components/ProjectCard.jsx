export default function ProjectCard({
  title,
  description,
  image,
  alt,
  imgHeight,
  textPadding = 'px-5',
  link,
  linkLabel = 'View Project',
}) {
  return (
    <div className="bg-[#fafafc] border-0 rounded-[10px] font-bold text-center transform transition-transform duration-500 hover:scale-105">
      {image ? (
        <img src={image} alt={alt ?? title} className={`w-full mx-auto mb-4 ${imgHeight ?? ''}`} />
      ) : (
        <div className="pt-6" />
      )}
      <div className="font-bold text-2xl text-[#1d1d20]">{title}</div>
      <div className={`text-[#1d1d20] ${textPadding} text-sm`}>{description}</div>
      {link ? (
        <a
          href={link}
          className="text-[0.8rem] text-[#5a8ef7] mb-[20px] inline-block mt-4 hover:text-[#3e5aa7]"
        >
          {linkLabel}
        </a>
      ) : (
        <span className="text-[0.8rem] text-[#72777c] mb-[20px] inline-block mt-4">
          Preview Not Available
        </span>
      )}
    </div>
  )
}
