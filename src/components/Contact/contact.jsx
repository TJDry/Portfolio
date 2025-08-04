import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from './contact.module.scss'

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
      <h2>Got an idea? Let's See what we can do about it</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div className={styles.contactBox}>
          <input type="text" name="user_name" required className={styles.input} placeholder="First Name"/>
        </div>
        <div className={styles.contactBox}>
          <input type="email" name="user_email" required className={styles.input} placeholder="Email Address"/>
        </div>
        <div className={styles.contactBox}>
          <textarea name="message" rows="4" required className={styles.input} placeholder="Enter a message"/>
        </div>
        <button type="submit" className={styles.sendButton}><span>Send!</span></button>
      </form>
      {status && <p className={styles.input}>{status}</p>}
    </div>
  );
};

export default ContactForm;