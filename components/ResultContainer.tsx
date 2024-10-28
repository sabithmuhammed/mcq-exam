import React from "react";
import ChartComponent from "./ChartComponent";
import { Button } from "./ui/button";
import { Copy, PhoneCall } from "lucide-react";



const ResultContainer: React.FC = () => {
    return (
        <div className=" flex-grow flex-col p-4 flex justify-center items-center">
            <h1 className={"font-serif text-3xl font-semibold mb-5 max-md:hidden"}>Your results based on your answers:</h1>
            <div className=" bg-white rounded-xl p-4 md:p-7 max-w-[720px] h-fit">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[60%]">
                        <p className="font-medium text-sm">
                            You are most suitable for
                        </p>
                        <h2 className="text-xl font-semibold my-3">
                            Association of Chartered Certified Accountant{" "}
                            <span className="text-orange-500">(ACCA)</span>
                        </h2>
                        <p className="text-sm text-balance">
                            Association of Chartered Certified Accountants are
                            professionals who are responsible for the financial
                            management of companies, financial reporting,
                            auditing, taxation, and other financial aspects of
                            the business. They have a global recognition and are
                            highly sought after in the finance industry for
                            their expertise. Join this elite group and make a
                            global impact.
                        </p>
                    </div>
                    <div className="flex-grow">
                        <ChartComponent />
                    </div>
                </div>
                <div className="border-[1px] my-6">
                </div>
                <div className=" flex max-md:justify-between md:gap-3">
                    <Button className="text-sm rounded-full max-md:hidden">
                        View course details
                    </Button>
                    <Button className="text-sm rounded-full md:hidden">
                        Course details
                    </Button>
                    <Button
                        variant={"secondary"}
                        className="rounded-full font-normal"
                    >
                        Consult Assistant <PhoneCall />
                    </Button>
                    <Button
                        variant={"secondary"}
                        className="max-md:hidden rounded-full font-normal"
                    >
                        Copy URL <Copy />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ResultContainer;
