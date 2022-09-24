import SubmitButton from "components/buttons/submitButton";
import Heading from "components/typography/Heading";
import React from "react";
import styles from "styles/home/contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.mapWrapper}>
        <Heading>Get In Touch</Heading>
        <div>
          <p>
            <span>The Triphecta Management Group is passionate about making </span>
            <span>brands matter more. </span>
          </p>
          <p>
            <span>We redefine brands cultural relevance with impact!</span>
          </p>
          <p>
            <span>Are you ready to place your brand center stage?</span>
          </p>
        </div>
      </div>
      <div className={styles.formSide}>
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
