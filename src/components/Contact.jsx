import { useEffect, useState } from 'react'
import Toast from './Toast'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ravisd740@gmail.com'
const fieldClass =
  'w-full px-4 py-2 rounded-md text-[#1d1d20] placeholder-[#1d1d20] border border-[#86868b] focus:outline-none focus:ring-2 focus:ring-blue-500'

export default function Contact() {
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    if (!toastVisible) return
    const timer = setTimeout(() => setToastVisible(false), 5000)
    return () => clearTimeout(timer)
  }, [toastVisible])

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (response.ok) {
        setToastVisible(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting the form.')
      console.error(error)
    }
  }

  return (
    <section id="contact" className="py-12">
      <h2 className="text-[3rem] font-bold md:ml-[7rem] ml-2 mb-2">Contact Me</h2>
      <p className="md:ml-[7rem] ml-2 text-[#72777c] md:mb-8 mb-2">
        You're welcome to get in touch by completing the form below.
      </p>

      <form
        onSubmit={handleSubmit}
        method="POST"
        className="ml-2 md:ml-[3.5rem] text-[#1d1d20] rounded-lg space-y-4 w-[90%] md:max-w-[50vw] p-6"
      >
        <div>
          <input name="name" className={fieldClass} type="text" placeholder="Name" />
        </div>
        <div>
          <input name="email" className={fieldClass} type="email" placeholder="Email" />
        </div>
        <div>
          <textarea
            name="message"
            rows="4"
            className={fieldClass}
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#0071e3] text-white px-6 py-2 rounded-md font-semibold md:w-[47.5vw] w-[90%] mx-auto"
        >
          Send Message
        </button>
      </form>

      <Toast visible={toastVisible} onClose={() => setToastVisible(false)} />
    </section>
  )
}
