import { FaRegSadCry } from 'react-icons/fa';
import './MissingShow.css';

export const MissingShow = () => {

  return (
    <article className="MissingShow">
      <p className="MissingShow__icon"><FaRegSadCry /></p>
      <h1>There is no show with that id.</h1>
    </article>
  );
};