import { useState, useEffect } from 'react';
/**
 * @description ToDoList
 */

function ToDoList() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    const onChange = (e) => setValue(e.target.value);

    const onClick = () => {
        if (!value) {
            alert('write your todos');
            return;
        }

        setList((prevState) => [...prevState, value]);
        setValue('');
    };

    const onEdit = (index) => {
        const editText = prompt();

        setList((prevState) => {
            const editList = prevState.map((item, i) => {
                return i === index ? editText : item;
            });
            return editList;
        });
    };

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div>
            <h1>To Do List</h1>
            <input value={value} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <hr />
            {list.map((item, index) => (
                <div key={index}>
                    <input value={item} readOnly />
                    <button onClick={() => onEdit(index)}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default ToDoList;
