import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>
        <div>
          <p>L</p>
        </div>
        <div>
          <p>Lorem</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis nostrum dolorum quisquam, minus rem exercitationem.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
}
