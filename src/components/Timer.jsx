import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("Feb 07, 2025 00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-500 shadow-md max-w-sm mx-auto">
      {timeLeft.days === 0 &&
      timeLeft.hours === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0 ? (
        <h1 className="text-xl font-bold text-red-600 text-center">
          Wedding Completed !!
        </h1>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-xl font-bold text-yel text-center">
            Countdown Timer
          </h1>
          <div className="grid grid-cols-4 gap-2">
            {/* Days */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white w-16 h-16 rounded-md shadow-md">
              <span className="text-lg font-semibold">{timeLeft.days}</span>
              <span className="text-xs uppercase">Days</span>
            </div>
            {/* Hours */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white w-16 h-16 rounded-md shadow-md">
              <span className="text-lg font-semibold">{timeLeft.hours}</span>
              <span className="text-xs uppercase">Hours</span>
            </div>
            {/* Minutes */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-md shadow-md">
              <span className="text-lg font-semibold">{timeLeft.minutes}</span>
              <span className="text-xs uppercase">Minutes</span>
            </div>
            {/* Seconds */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white w-16 h-16 rounded-md shadow-md">
              <span className="text-lg font-semibold">{timeLeft.seconds}</span>
              <span className="text-xs uppercase">Seconds</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
