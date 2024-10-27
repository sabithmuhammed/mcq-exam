import React, { ReactNode, useState } from "react";
import { Separator } from "./ui/separator";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronDown, ChevronUp } from "lucide-react";

type QuestionListProps = {
    answers: boolean[];
    currentQuestion: number;
    handleQuestionChange: (pageNumber: number) => void;
};

const QuestionsList: React.FC<QuestionListProps> = ({
    answers,
    currentQuestion,
    handleQuestionChange,
}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div
            className={
                (collapsed ? `max-md:h-[116px]` : `pb-4`) +
                ` w-full md:max-w-[320px]  bg-white rounded-md max-md:px-5 md:p-5 overflow-hidden`
            }
        >
            <div className="flex justify-between items-center">
                <div className="py-4 flex gap-5">
                    <h2 className="md:text-lg max-md:text-gray-500 max-md:text-sm md:font-medium">
                        Overview
                    </h2>
                    timer
                </div>
                <div
                    className="md:hidden"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? (
                        <ChevronDown size={18} />
                    ) : (
                        <ChevronUp size={18} />
                    )}
                </div>
            </div>
            <Separator />
            <div className="mt-4">
                <Pagination>
                    <PaginationContent className=" w-full">
                        <PaginationItem className="flex gap-3 md:gap-2 flex-wrap ">
                            {answers.map((answered, index) => (
                                <PaginationLink
                                    key={index}
                                    onClick={() =>
                                        handleQuestionChange(index + 1)
                                    }
                                    className={
                                        (answered
                                            ? `bg-green-600 hover:bg-green-700 hover:text-white text-white`
                                            : currentQuestion == index + 1
                                            ? `bg-white border-orange-500 border-2`
                                            : `bg-gray-200 text-gray-500 hover:bg-gray-200`) +
                                        ` rounded-full w-8 h-8 cursor-pointer`
                                    }
                                >
                                    {index + 1}
                                </PaginationLink>
                            ))}
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default QuestionsList;
