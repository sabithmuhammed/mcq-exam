import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
    const [time, setTime] = useState(3600);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerInterval);
    }, []);

    const formatTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const sec = seconds % 60;
        return ` ${hours == 0 ? "00" : ""}:${mins < 10 ? "0" : ""}${mins}:${
            sec < 10 ? "0" : ""
        }${sec}`;
    };
    return (
        <div
            className={` ${
                time < 360 ? `text-red-500` : `text-gray-400`
            } text-xs font-semibold bg-gray-100 px-1 rounded-sm flex justify-center items-center`}
        >
            {formatTime(time)}
        </div>
    );
};

export default Timer;
