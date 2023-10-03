import { useDispatch, useSelector} from 'react-redux'
import { increment, decrement, incrementByAmout, decrementByAmount } from '../redux/counter'

export const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrementByAmount(10))}>decrement by 10</button>
                <button onClick={() => dispatch(decrement())}>decrement</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increment())}>increment</button>
                <button onClick={() => dispatch(incrementByAmout(5))}>increment by 5</button>
            </div>
        </div>
    );
};

