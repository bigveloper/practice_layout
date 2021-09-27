import { Link } from 'react-router-dom';
/**
 * @description Sidebar
 */

function Sidebar() {
    // css
    const style = {
        display: 'flex',
        justifyContent: 'center',

        width: '15%',
        height: 'calc(100vh - 200px)',
        border: '3px solid red',
        boxSizing: 'border-box',
    };

    // view
    return (
        <div style={style}>
            <ul>
                <li>
                    <Link to="/checkbox">Checkbox</Link>
                </li>
                <li>
                    <Link to="/password">Password</Link>
                </li>
                <li>
                    <Link to="/radio">Radio</Link>
                </li>
                <li>
                    <Link to="/select">Select</Link>
                </li>
                <li>
                    <Link to="/textarea">Textarea</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
