import { useEffect, useState } from "react";
import useCounter from "../hooks/counter";

function Count () {
    // const [count, setCount] = useState(0);
    const [name, setName] = useState("Toby")
    // untuk simpen variable sekarang pakai useState, jangan polosan

    const [count, increment, decrement] = useCounter(0, 5);

    // useEffect bisa dipakai jika ada code yg dieksekui ketika ada perubahan
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>{name}</p>
            <p>You clicked {count}</p>
            <button onClick={increment}>
                increment
            </button>
            <button onClick={decrement}>
                decrement
            </button>
        </div>
    )
}

export default Count;

