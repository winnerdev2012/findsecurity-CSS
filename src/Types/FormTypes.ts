export interface Question {
	id: string;
	activity_id: string;
	question_type: string;
	options: string[];
	answers: number[];
	show_other: boolean;
	multiple_selection: boolean;
	results_options: number[] | null;
	results_other: number | null;
	selection: number[] | null;
	other_answer: string | null;
  text_answer: string | null;
	is_correct: boolean;
}
