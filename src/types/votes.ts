/**
 * Типізуй цей стан через інтерфейс Votes, 
 * який треба оголосити та експортувати у файлі 
 * src/types/votes.ts. 
 * У цьому ж файлі створи тип VoteType – 
 * це перелік допустимих рядкових значень 
 * 'good' | 'neutral' | 'bad'.
 */

export interface Votes {
    good: number;
    neutral: number;
    bad: number;
}
export type VoteType = 'good' | 'neutral' | 'bad';