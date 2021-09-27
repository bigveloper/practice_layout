import { useState, useEffect } from 'react';
/**
 * @description Checkbox
 */

function Checkbox() {
    const [laptop, setLaptop] = useState(false);

    const onChange = (e) => setLaptop(e.target.value);

    useEffect(() => {
        console.log(laptop);
    }, [laptop]);
    return (
        <form>
            <h1> What do you wnat to Laptop </h1>
            <input type="checkbox" name="laptop" value="MacBookAir" onChange={onChange} /> MacBook Air <br />
            <input type="checkbox" name="laptop" value="MacBookPro" onChange={onChange} /> MacBook pro <br />
            <input type="checkbox" name="laptop" value="GalaxyBook" onChange={onChange} /> Galaxy Book <br />
            <input type="checkbox" name="laptop" value="AsusZenBook" onChange={onChange} /> zenBook <br />
            <input type="submit" />
            <br />
            <input type="reset" />
        </form>
    );
}

export default Checkbox;
