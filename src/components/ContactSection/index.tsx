import { useState } from "react";
import { CONTACT_SECTION_CONTENT } from "./const";
import { ContactForm } from "./ContactForm";
import { convertFromDataToServerSideBody } from "./utils";

export interface IContactFormInput {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const { title, description } = CONTACT_SECTION_CONTENT;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFormSubmit = async (data: IContactFormInput) => {
    setIsSubmitting(true);
    try {
      const endpoint = import.meta.env.VITE_SEND_EMAIL_API;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(convertFromDataToServerSideBody(data)),
      });
      const responseData = await response.json();
      alert(responseData.message);
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="contact-description">{description}</p>
        <div className="contact-form-container">
          <ContactForm
            onFormSubmit={onFormSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </section>
  );
};
