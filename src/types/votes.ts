export type VoteType = 'good' | 'neutral' | 'bad';

export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}

export type Props = {
    votes: Votes;
    onVote: (voteType: VoteType) => void;
    onReset: (voteType: VoteType) => void;
};