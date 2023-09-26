import { useState } from 'react';
import { Button } from './ui/button';

type ShowMoreTextProps = {
  text: string;
};

export default function ShowMoreText(props: ShowMoreTextProps) {
  const { text } = props;
  const [showMore, setShowMore] = useState(false);
  const textIsShort = text.length < 500;

  if (textIsShort) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {showMore ? text : `${text.substring(0, 500)}... `}
      <Button
        variant="link"
        className="underline p-0"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'Read more'}
      </Button>
    </p>
  );
}
