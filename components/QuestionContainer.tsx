import React from "react";
import Timer from "./Timer";
import { Source_Sans_3 } from "next/font/google";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Question } from "@/app/api/questions";
import { Skeleton } from "./ui/skeleton";
import { answerType } from "./Dashboard";
import { Button } from "./ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";
import { Flag } from "lucide-react";

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    display: "swap",
    adjustFontFallback: false,
});
type QuestionContainerProps = {
    question: Question | undefined;
    loading: boolean;
    answers: answerType[];
    selectAnswer: (questionId: string, option: string) => void;
    totalQuestions: number;
    currentQuestion: number;
    handleQuestionChange: (pageNumber: number) => void;
};

const QuestionContainer: React.FC<QuestionContainerProps> = ({
    question,
    loading,
    answers,
    selectAnswer,
    totalQuestions,
    currentQuestion,
    handleQuestionChange,
}) => {
    const getAnswer = (questionId: string): answerType | undefined => {
        return answers.find((item) => item.qId == questionId);
    };
    return (
        <div className="w-full md:max-w-[850px] bg-white rounded-md p-4 md:p-7 flex flex-col justify-between">
            <div className="">
                <div className="">
                    <div className="flex justify-between">
                        <div className="text-sm">
                            {question && (
                                <div>
                                    MCQ-
                                    <span className="text-red-600">
                                        {question?.id.toLocaleUpperCase()}
                                    </span>
                                </div>
                            )}
                        </div>
                        <Timer />
                    </div>
                    {loading ? (
                        <Skeleton className="h-8 w-full my-6" />
                    ) : question ? (
                        <p
                            className={`${sourceSans.className} my-6 text-2xl font-semibold`}
                        >
                            {question.question}
                        </p>
                    ) : (
                        <p className="my-6 text-center">
                            Please wait while loading question....
                        </p>
                    )}
                </div>
                <Separator />
                <div className="mt-7 p-2">
                    <RadioGroup
                        defaultValue="comfortable"
                        className="flex flex-col gap-8"
                    >
                        {loading ? (
                            <>
                                <div className="">
                                    <Skeleton className="h-4 w-[250px]" />
                                </div>
                                <div className="">
                                    <Skeleton className="h-4 w-[250px]" />
                                </div>
                                <div className="">
                                    <Skeleton className="h-4 w-[250px]" />
                                </div>
                                <div className="">
                                    <Skeleton className="h-4 w-[250px]" />
                                </div>
                            </>
                        ) : (
                            question &&
                            question.options.map((option, index) => (
                                <div
                                    className="flex items-center space-x-2"
                                    key={option.id}
                                >
                                    <RadioGroupItem
                                        value={option.id}
                                        id={option.id}
                                        onClick={() =>
                                            selectAnswer(question.id, option.id)
                                        }
                                        checked={
                                            getAnswer(question.id)?.option ===
                                            option.id
                                        }
                                        char={String.fromCharCode(65 + index)}
                                    />
                                    <Label htmlFor="r1">{option.option}</Label>
                                </div>
                            ))
                        )}
                    </RadioGroup>
                </div>
            </div>
            <div className="flex justify-between">
                <Button
                    className="rounded-full"
                    disabled={
                        answers.reduce(
                            (acc, { answered }) => (answered ? acc + 1 : acc),
                            0
                        ) <
                        totalQuestions / 2
                    }
                >
                    End and Submit
                </Button>
                <div className="">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    className="bg-gray-100 rounded-full cursor-pointer"
                                    onClick={() =>
                                        handleQuestionChange(
                                            currentQuestion - 1
                                        )
                                    }
                                />
                            </PaginationItem>
                            <Button className="rounded-full bg-orange-500">
                                Flag <Flag fill="#fff" color="#fff" size={15} />
                            </Button>
                            <PaginationItem>
                                <PaginationNext
                                    className="bg-gray-100 rounded-full cursor-pointer"
                                    onClick={() =>
                                        handleQuestionChange(
                                            currentQuestion + 1
                                        )
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default QuestionContainer;
