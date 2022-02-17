import classnames from 'classnames';
import { RichText as RichTextPrismic } from 'prismic-reactjs';

interface RichTextProps {
  className?: string;
  richTextContent: any;
}

export const RichText = ({ className, richTextContent }: RichTextProps) => (
  <div className={classnames('richText', className)}>
    <RichTextPrismic render={richTextContent} />
  </div>
);