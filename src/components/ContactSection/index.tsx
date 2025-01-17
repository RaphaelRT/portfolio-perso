import React from 'react';
import { ReactComponent as PhoneIcon } from '../../assets/icons/smartphone.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';

const ContactSection: React.FC = () => {
  const contactItems = [
    { icon: <PhoneIcon />, text: '06 83 03 34 51', link: 'tel:+33683033451' },
    { icon: <MailIcon />, text: 'raphaelrobert.pro@gmail.com', link: 'mailto:raphaelrobert.pro@gmail.com' },
    { icon: <LinkedinIcon />, text: 'Raphaël ROBERT', link: 'https://linkedin.com/in/raphael-rbrt', isExternal: true },
    { icon: <GithubIcon />, text: 'RaphaelRT', link: 'https://github.com/RaphaelRT', isExternal: true },
    { icon: <DownloadIcon />, text: 'Curriculum vitae', link: '/download/CV_ROBERT_Raphael_2025.pdf', isExternal: false },
  ];

  return (
    <section className="contactSection">
      <ul>
        {contactItems.map((item, index) => (
          <li key={index} className={"hoverable"}>
            <a href={item.link || '#'} target={item.isExternal ? '_blank' : '_self'} rel={item.isExternal ? 'noopener noreferrer' : undefined}>
              <span className={"icon"}>{item.icon}</span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactSection;
