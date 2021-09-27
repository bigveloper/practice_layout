import { useState, useEffect } from 'react';
/**
 * @description Radio
 */

function Radio() {
    // state
    const [car, setCar] = useState('');

    // event
    const onChange = (e) => setCar(e.target.value);

    // watch
    useEffect(() => {
        console.log(car);
    }, [car]);

    // view
    return (
        <form>
            <input type="radio" name="car" value="Benz" onChange={onChange} /> Benz <br />
            <input type="radio" name="car" value="Audi" onChange={onChange} /> Audi <br />
            <input type="radio" name="car" value="Volvo" onChange={onChange} /> Volvo <br />
            <input type="submit" />
            <input type="reset" />
        </form>
    );
}

export default Radio;
