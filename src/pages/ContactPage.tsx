import React from 'react';
import Header from '../components/Header';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Contact Me</h1>
          <p>If you have any questions or would like to work together, feel free to contact me!</p>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
