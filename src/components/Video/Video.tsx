import './Video.css';

interface Props {
  videoUrl: string;
  hideVideo: () => void;
}

export const Video = ({ videoUrl, hideVideo }: Props) => {

  return (
    <article className="Video"
             onClick={ hideVideo }>
      <iframe className="Video__iframe"
              src={ `https://www.youtube.com/embed/${ videoUrl }?autoplay=1` }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
    </article>
  );
};