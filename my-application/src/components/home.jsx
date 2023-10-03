import { useDispatch, useSelector} from 'react-redux'

export const Home = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{count}</h3>
        </div>
    )
}