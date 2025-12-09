// src/components/VoteStatsProps.tsx
import css from "./VoteStats.module.css";
// import type { Vote, VoteType } from "../../types/votes";

//votes – об'єкт, що містить кількість голосів для
// кожної категорії: good, neutral, bad;

interface VoteStatsProps {
  votes: {
    good: number;
    neutral: number;
    bad: number;
  };
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStatsProps({
  votes,
  totalVotes,
  positiveRate,
}: VoteStatsProps) {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>0</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>0</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>0</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>0</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>0%</strong>
      </p>
    </div>
  );
}
