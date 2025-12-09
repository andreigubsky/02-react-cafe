// src/components/CafeInfo.tsx
import css from "./VoteOptions.module.css";
import type { Votes, VoteType } from "../../types/votes";

interface VoteOptionsProps {
  votes: Votes;
  onVote: (voteType: VoteType) => void;
  onReset: (voteType: VoteType) => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  // const setVote = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log("Clicked!", event);
  //   console.log("Target:", event.target); // сам <button>
  // };

  return (
    <>
      <div className={css.container}>
        <button className={css.button}>Test</button>
        <button className={css.button}>Good</button>
        <button className={css.button}>Neutral</button>
        <button className={css.button}>Bad</button>
        {canReset && (
          <button className={`${css.button} ${css.reset}`}>Reset</button>
        )}
      </div>
    </>
  );
}
