// src/components/CafeInfo.tsx
import css from "./VoteOptions.module.css";
import type { Votes, VoteType } from "../../types/votes";

interface VoteOptionsProps {
  votes: Votes;
  onVote: (voteType: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  votes,
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <>
      <div className={css.container}>
        <button className={css.button} onClick={() => onVote("good")}>
          Good ({votes.good})
        </button>
        <button className={css.button} onClick={() => onVote("neutral")}>
          Neutral ({votes.neutral})
        </button>
        <button className={css.button} onClick={() => onVote("bad")}>
          Bad ({votes.bad})
        </button>
        {canReset && (
          <button
            className={`${css.button} ${css.reset}`}
            onClick={() => {
              onReset();
            }}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
