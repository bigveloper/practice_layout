import { useState, useEffect } from 'react';

/**
 * @description Checkbox
 */

// Component
function Checkbox() {
    // State
    const [laptop, setLaptop] = useState('');

    // Event
    const onChange = (e) => setLaptop(e.target.value);

    // Watch
    useEffect(() => {
        console.log(laptop);
    }, [laptop]);

    // View
    return (
        <form>
            <h1> what do you want to Laptop</h1>
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onChange} /> MacBook Air <br />
            <input type="checkbox" name="laptop" value="MacBookPro" onChange={onChange} /> MacBook Pro <br />
            <input type="submit" />
            <input type="reset" />
        </form>
    );
}

export default Checkbox;
