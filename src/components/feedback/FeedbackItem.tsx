import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import type { TFeedbackItem } from "../../lib/types";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: { upvoteCount, badgeLetter, company, text, daysAgo },
}: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvoteCountValue, setUpvoteCountValue] = useState(upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCountValue((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCountValue}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
    </li>
  );
}
