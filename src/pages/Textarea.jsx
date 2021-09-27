import { useState, useEffect } from 'react';

/**
 * @description Textarea
 */

function Textarea() {
    const [value, setValue] = useState('');
    const onChange = (e) => setValue(e.target.value);
    const onReset = () => setValue('');

    useEffect(() => {
        console.log(value);
    }, [value]);
    return (
        <form>
            <h1>write your message</h1>
            <textarea value={value} placeholder="메세지를 입력하시오" onChange={onChange} />
            <input type="submit" />
            <button onClick={onReset}>전체삭제</button>
        </form>
    );
}

export default Textarea;
