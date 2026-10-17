import profile from '../assets/image1.png'
import resume from '../assets/Resume.pdf'

export default function Hero() {
  return (
    <>
      <div className="w-full text-[3rem] font-bold mt-10 ml-4 md:ml-[8rem] md:block hidden">
        {' '}
        Ravinder's Portfolio
      </div>
      <section
        id="About"
        className="md:flex md:justify-around md:items-center md:my-[20px] my-[50px] mx-auto"
      >
        <div className="md:w-[40%] w-[90%] font-bold text-[2rem] md:mx-[80px] mx-auto">
          <span className="text-[#72777c] font-bold">
            Computing Science student at TRU who builds web apps and IoT projects with React and
            Python.
          </span>

          <div className="md:mt-11 flex gap-4">
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer mt-[45px] w-[200px] bg-[#0071e3] text-[#f1f6fd] text-center rounded-[20px] text-[20px] px-2 py-1"
            >
              Download Resume
            </a>
            <a
              href="https://github.com/Ravi200603"
              target="_blank"
              rel="noreferrer"
              className="mt-[45px] w-[200px] text-center bg-[#0071e3] text-[#f1f6fd] border-2 border-[#a7aabc] rounded-[20px] text-[20px] px-2 py-1 inline-block"
            >
              Github Profile
            </a>
          </div>
        </div>

        <div className="md:w-[30%] mt-10 md:mx-0">
          <img
            src={profile}
            alt=""
            className="md:w-[90%] h-auto rounded-[280px] border-4 mx-auto md:mx-0"
          />
        </div>
      </section>
    </>
  )
}
