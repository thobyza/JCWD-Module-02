import { useEffect } from "react";
import useCounter from "../hooks/counter";

function CountFunc () {
    const [count, increment, decrement] = useCounter(0, 1);

    useEffect( () => {
        document.title = {count}
    })

    return (
        <div className="flex justify-center items-center mx-auto my-40 w-64 h-24 bg-gray-200 rounded-lg">
            <div className="flex justify-between gap-6 mx-9">
                <button onClick={decrement} className="increment flex justify-center w-12 bg-red-500 rounded-md">-</button>
                <div className="count">{count}</div>
                <button onClick={increment} className="decrement flex justify-center w-12 bg-green-600 rounded-md">+</button>
            </div>
        </div>
    )

}

export default CountFunc;