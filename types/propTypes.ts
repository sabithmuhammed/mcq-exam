import { ReactNode } from "react";
import { Question } from "@/app/api/questions";

export interface QuestionContainerProps {
    question: Question | undefined;
    loading: boolean;
    answers: answerType[];
    selectAnswer: (questionId: string, option: string) => void;
    totalQuestions: number;
    currentQuestion: number;
    handleQuestionChange: (pageNumber: number) => void;
}

export interface answerType {
    qId: string;
    answered: boolean;
    option: null | string;
}

export interface SidebarItemProps {
    text: string;
    icon: ReactNode;
    href: string;
}
