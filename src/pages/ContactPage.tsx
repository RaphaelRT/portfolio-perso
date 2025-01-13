import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Contact Me</h1>
          <p>If you have any questions or would like to work together, feel free to contact me!</p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
