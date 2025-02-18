import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.VITE_SERVICE_ID,
        process.env.VITE_TEMPLATE_ID,
        form.current,
        process.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => setStatus("Failed to send message. Try again."));
  };

  return (
    <section
      id="contactme"
      className="flex flex-col border-2 border-gray-400 p-5 rounded-3xl w-[100%] gap-3 mb-5 min-h-[50px] max-h-[750px]"
    >
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg font-bold">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="border-2 border-gray-400 rounded-3xl p-2"
          />

          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="border-2 border-gray-400 rounded-3xl p-2"
          />

          <label htmlFor="message" className="text-lg font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
            className="border-2 border-gray-400 rounded-3xl p-2 min-h-[100px]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#0000ff] p-2 rounded-3xl mt-5 mx-auto w-[30%] block hover:scale-[1.05]"
        >
          Send
        </button>
        {status && (
          <h1 className={`text-green-500 text-2xl text-center p-2`}>
            {status}
          </h1>
        )}
      </form>
    </section>
  );
}

export default ContactMe;
