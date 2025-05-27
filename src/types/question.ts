export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
}
