import { useState, useEffect } from 'react';

/**
 * @description Select
 */

function Select() {
    // state
    const [abc, setAbc] = useState('');
    // event
    const onChange = (e) => setAbc(e.target.value);

    // watch
    useEffect(() => {
        console.log(abc);
    }, [abc]);

    // view
    return (
        <form>
            <select name="abc" onChange={onChange}>
                <option value="aa">aa</option>
                <option value="bb">bb</option>
                <option value="cc">cc</option>
            </select>
            <input type="submit" />
        </form>
    );
}

export default Select;
