import { useStopwatch } from "react-timer-hook";

function Stopwatch () {
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: true})

    return (
        <div className="flex justify-center items-center mx-auto my-40 w-64 bg-gray-200 rounded-lg">
            <div className="w-40 my-8">
                <div className="timer flex justify-center text-3xl mb-3">
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <div className="flex justify-between">
                    <button onClick={start} className="w-12 h-8 rounded-md text-sm bg-green-600">Start</button>
                    <button onClick={pause} className="w-12 h-8 rounded-md text-sm bg-red-500">Stop</button>
                    <button onClick={reset} className="w-12 h-8 rounded-md text-sm bg-yellow-400">Reset</button>
                </div>
            </div>
        </div>
    )

}

export default Stopwatch;