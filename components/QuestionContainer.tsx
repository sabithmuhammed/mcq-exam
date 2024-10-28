"use client";
import React from "react";
import Timer from "./Timer";
import { Separator } from "./ui/separator";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";
import { Flag } from "lucide-react";
import { useRouter } from "next/navigation";
import { answerType, QuestionContainerProps } from "@/types/propTypes";



const QuestionContainer: React.FC<QuestionContainerProps> = ({
    question,
    loading,
    answers,
    selectAnswer,
    totalQuestions,
    currentQuestion,
    handleQuestionChange,
}) => {
    const router = useRouter();
    const getAnswer = (questionId: string): answerType | undefined => {
        return answers.find((item) => item.qId == questionId);
    };

    const notMinumumSelected = (): boolean => {
        // function to check if the user attended at least 50% the questions; 
        return (
            answers.reduce(
                (acc, { answered }) => (answered ? acc + 1 : acc),
                0
            ) <
            totalQuestions / 2
        );
    };

    const handleNavigation = () => {
        router.push("/result");
    };

    return (
        <div className="w-full md:max-w-[850px] bg-white rounded-md p-4 md:p-7 flex flex-col justify-between">
            <div className="">
                <div className="">
                    <div className="flex justify-between max-md:hidden">
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
                        <>
                            <Skeleton className="h-7 w-full mt-0 md:mt-6 mb-2  md:my-6" />
                            <Skeleton className="md:hidden h-7 w-1/3 mb-6 " />
                        </>
                    ) : question ? (
                        <p
                            className={`font-serif my-6 max-md:mt-0 text-2xl font-semibold`}
                        >
                            {question.question}
                        </p>
                    ) : (
                        <p className="my-6 max-md:mt-0 text-center">
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
                                    <Label htmlFor={option.id}>{option.option}</Label>
                                </div>
                            ))
                        )}
                    </RadioGroup>
                </div>
            </div>
            <div className="mt-16">
                <Separator className="mb-5" />
                <div className="flex justify-between">
                    <Button
                        className="rounded-full max-md:hidden"
                        disabled={notMinumumSelected()}
                        onClick={handleNavigation}
                    >
                        End and Submit
                    </Button>
                    <Button
                        className="rounded-full md:hidden"
                        disabled={notMinumumSelected()}
                        onClick={handleNavigation}
                    >
                        End & Submit
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
                                <Button
                                    className="rounded-full "
                                    variant="secondary"
                                >
                                    Flag <Flag size={15} />
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
        </div>
    );
};

export default QuestionContainer;
