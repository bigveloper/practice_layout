import { useState, useEffect } from 'react';
/**
 * @description Radio
 */

function Radio() {
    const [brand, setBrand] = useState(false);

    const onChange = (e) => setBrand(e.target.value);

    useEffect(() => {
        console.log(brand);
    }, [brand]);
    return (
        <form>
            <h1> What do you favorite Brand?</h1>
            <input type="radio" name="brand" value="Apple" onChange={onChange} /> Apple <br />
            <input type="radio" name="brand" value="Samsung" onChange={onChange} /> Samsung <br />
            <input type="radio" name="brand" value="LG" onChange={onChange} /> LG <br />
            <input type="radio" name="brand" value="Asus" onChange={onChange} /> Asus <br />
            <input type="submit" /> <br />
            <input type="reset" />
        </form>
    );
}

export default Radio;
