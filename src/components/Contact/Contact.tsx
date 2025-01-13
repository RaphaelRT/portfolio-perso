import React from 'react';
import { ReactComponent as PhoneIcon } from '../../assets/icons/smartphone.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';

const Contact: React.FC = () => {
  const contactItems = [
    { icon: <PhoneIcon />, text: '06 83 03 34 51' },
    { icon: <MailIcon />, text: 'raphaelrobert.pro@gmail.com' },
    { icon: <LinkedinIcon />, text: 'Raphaël ROBERT', link: 'https://linkedin.com/in/raphaelrobert' },
    { icon: <GithubIcon />, text: 'RaphaelRT', link: 'https://github.com/RaphaelRT' },
    { icon: <DownloadIcon />, text: 'Curriculum vitae', link: '/path/to/cv.pdf' },
  ];

  return (
    <section className={"contact"}>
      <ul>
        {contactItems.map((item, index) => (
          <li key={index} className={"hoverable"}>
            <a href={item.link || '#'} target={item.link ? '_blank' : '_self'} rel="noopener noreferrer">
              <span className={"icon"}>{item.icon}</span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
