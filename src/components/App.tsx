// src/App.tsx
import css from "./App.module.css";
import { useState } from "react";
import type { Votes, VoteType } from "../types/votes";
import CafeInfo from "./CafeInfo/CafeInfo";
import VoteOptions from "./VoteOptions/VoteOptions";
import VoteStats from "./VoteStats/VoteStats";
import Notification from "./Notification/Notification";

export default function App() {
  //Таким чином, votes буде центральним джерелом даних про голосування,
  // а всі відповідні компоненти зможуть отримувати актуальні значення
  // через пропси.
  const [votes, setVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const resetVotes = (voteType: VoteType) => {
    setVote({
      ...votes,
      [voteType]: 0,
    });
  };

  const handleVote = (voteType: VoteType) => {
    setVote((prev) => ({
      ...prev,
      [voteType]: prev[voteType] + 1,
    }));
  };

  // Крок 6. Обчислення статистики

  const totalVotes = votes.good + votes.neutral + votes.bad;
  
  let positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        (totalVotes>0) 
        ? <VoteStats votes={votes} onVote={handleVote} onReset={resetVotes} />
        : <Notification />
      </div>
    </>
  );
}
