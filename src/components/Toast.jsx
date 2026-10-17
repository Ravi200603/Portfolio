export default function Toast({ visible, onClose }) {
  return (
    <div
      className={`${
        visible ? 'flex' : 'hidden'
      } fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#fafafc] border border-[#ede7fd] text-[#1d1d20] px-4 py-3 rounded-xl shadow-lg justify-between items-center gap-4 z-50 w-[90%] max-w-[450px] sm:px-6 sm:py-4`}
    >
      <span className="text-sm sm:text-base">
        Thanks for reaching out! <br /> I will get back to you as soon as possible
      </span>
      <button
        onClick={onClose}
        className="text-[#1d1d20] text-xl font-bold leading-none hover:text-red-500"
      >
        &times;
      </button>
    </div>
  )
}
