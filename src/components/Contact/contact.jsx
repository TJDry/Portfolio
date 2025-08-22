import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from './contact.module.scss';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // set system time into hidden input before sending
    const timeInput = form.current.querySelector("input[name='time']");
    if (timeInput) {
      timeInput.value = new Date().toLocaleString(); // you can format this however you like
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        "I83m-ZyyEOESi88Zw"
      )
      .then(
        () => {
          setStatus("✅ Feedback sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send feedback. Please try again.");
        }
      );
  };

  return (
    <div className={styles.contactContainer}>
      <h2>Got an idea? Let's Create.</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div className={styles.contactBox}>
          <input type="text" name="name" required className={styles.input} placeholder="Name"/>
        </div>
        <div className={styles.contactBox}>
          <input type="email" name="email" required className={styles.input} placeholder="Email Address"/>
        </div>
        <div className={styles.contactBox}>
          <input type="text" name="title" required className={styles.input} placeholder="Subject"/>
        </div>
        <div className={styles.contactBox}>
          <textarea name="message" rows="4" required className={styles.input} placeholder="Enter a message"/>
        </div>
        
        {/* Hidden input for system time */}
        <input type="hidden" name="time" />

        <button type="submit" className={styles.sendButton}><span>Send email!</span></button>
      </form>
      {status && <p className={styles.input}>{status}</p>}
    </div>
  );
};

export default ContactForm;
