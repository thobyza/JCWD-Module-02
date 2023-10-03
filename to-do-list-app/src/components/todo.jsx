import { useDispatch, useSelector} from 'react-redux'
import { onDone, onAdd, onDelete } from '../redux/toDoList';
import { useRef } from 'react';

export const Todo = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todo.value);
    const itemRef = useRef;
    // const toast = useToast();

    const handleAdd = () => {
        let task = itemRef.current.value;
        if (task === "") {
        //     toast({
        //         title: "Error",
        //         description: "Invalid Task",
        //         status: "error",
        //         duration: 1000,
        //         position: "top-left",
        //         isClosable: true,
        //     });
        // } else if (list.findIndex((v) => v.task === task) !== -1) {
        //     toast({
        //         title: "Error",
        //         description: "Duplicate Task",
        //         status: "error",
        //         duration: 1000,
        //         position: "top-left",
        //         isClosable: true,
        //     });
        } else {
            dispatch(onAdd([...list, { task: task, isDone: false}]));
        }
        itemRef.current.value = "";
    };

    const handleDelete = (index) => {
        dispatch(onDelete(index))
    }

    const handleDone = (index) => {
        dispatch(onDone(index))
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-lg">To-Do List App</div>
            <div className="flex">
                <input 
                    className="shadow appearance-none border rounded mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text" 
                    placeholder="enter a new task" 
                    ref={itemRef}
                />
                <button 
                    className="bg-blue-400 hover:bg-gray-100 text-white font-semibold py-1 px-2 border border-blue-500 rounded shadow"
                    onClick={handleAdd}
                >Add Task</button>
            </div>
            <div>
                <div>Task : {list.length}</div>
                <div>Done : {list.filter((item) => item.isDone === true).length}</div>
            </div>
            <div>
                {list.map((value, index) => {
                    return (
                        <div key={index}>
                            <input 
                                id="default-checkbox" 
                                type="checkbox" 
                                value="" 
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                isChecked={value?.isDone}  
                                onChange={() => handleDone(index)}  
                            ></input>
                            <div>{value.task}</div>
                            <button onClick={() => handleDelete(index)}></button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
