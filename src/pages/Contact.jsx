import React, { useState } from "react";
import ContactHero from "../Components/ContactUs/ContactHero";
import ContactForm from "../Components/ContactUs/ContactForm";
import ContactInfo from "../Components/ContactUs/ContactInfo";
import ContactSucces from "../Components/ContactUs/ContactSuccess";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="px-2">
      <ContactHero />
      {!submitted ? (
        <>
          <ContactForm onSubmit={() => setSubmitted(true)} />
          <ContactInfo />
        </>
      ) : (
        <ContactSucces />
      )}
    </div>
  );
};

export default Contact;
