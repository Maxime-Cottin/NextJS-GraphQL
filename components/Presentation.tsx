import { RichText } from "./RichText";

interface PresentationProps {
  intro: any;
  video_id: string;
}

export const Presentation = ({ intro, video_id }: PresentationProps) => {
  const baseLink = "https://www.youtube.com/embed/";
  const fullLink = baseLink.concat("", video_id);
  return (
    <section id="presentation">
      <RichText richTextContent={intro} />
      <div className="videoFrame">
        <iframe
          src={fullLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
