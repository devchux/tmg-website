import SubmitButton from "components/buttons/submitButton";
import React from "react";
import styles from "styles/home/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.mapWrapper}>
        <div className={styles.map}>
          <iframe
            style={{ border: 0, width: "100%", height: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3961.302825756906!2d7.385628114267555!3d6.854259221132536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1638010697126!5m2!1sen!2sng"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className={styles.formSide}>
        <p>
          If the path is beautiful, let us not ask where it leads. my religion
          is very simple. my religion is kindness.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.inputWrapper}>
            <input type="text" placeholder="Your full name" />
            <div />
          </div>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="Your e-mail address" />
            <div />
          </div>
          <div className={styles.inputWrapper}>
            <textarea placeholder="Drop us a message here…" />
            <div />
          </div>
          <div className={styles.submit}>
            <SubmitButton>send now</SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
