import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {

  return (
    <footer className="Footer">
      <p className="Footer__icons">
        <a href="mailto:czerwitom@gmail.com" target="_blank" rel="noreferrer"><HiOutlineMail /></a>
        <a href="https://www.linkedin.com/in/tomasz-czerwi%C5%84ski-751b6b231/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
      </p>
      <p>Tomasz Czerwiński</p>
    </footer>
  );
};