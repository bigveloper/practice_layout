import { useState, useEffect } from 'react';
/**
 * @description Select
 */

function Select() {
    const [car, setCar] = useState('');

    const onChange = (e) => setCar(e.target.value);

    useEffect(() => {
        console.log(car);
    }, [car]);
    return (
        <form>
            <h1>what do you wnat to Car Brand</h1>
            <select name="car">
                <option value="Benz" onChange={onChange}>
                    Benz
                </option>
                <option value="Audi" onChange={onChange}>
                    Audi
                </option>
                <option value="Volvo" onChange={onChange}>
                    Volvo
                </option>
                <option value="Hyundai" onChange={onChange}>
                    Hyundai
                </option>
                <option value="Kia" onChange={onChange}>
                    Kia
                </option>
            </select>
            <input type="submit" />
        </form>
    );
}

export default Select;
