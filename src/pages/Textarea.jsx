import { useState, useEffect } from 'react';

/**
 * @description Textarea
 */

function Textarea() {
    // state
    const [value, setValue] = useState('');

    // event
    const onChange = (e) => setValue(e.target.value);
    const onReset = () => setValue('');

    // watch
    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <form>
            <textarea value={value} onChange={onChange} />
            <br />
            <input type="submit" />
            <br />
            <button onClick={onReset}>Reset</button>
        </form>
    );
}

export default Textarea;
