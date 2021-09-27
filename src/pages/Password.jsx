import { useState, useEffect } from 'react';

/**
 * @description Password
 */

function Password() {
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);

    const onReset = () => setValue('');

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <form>
            <h1>put your password</h1>
            <input type="password" value={value} onChange={onChange} />
            <br />
            <input type="submit" />
            <button onClick={onReset}>전체삭제</button>
        </form>
    );
}

export default Password;
