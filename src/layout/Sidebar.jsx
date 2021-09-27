import { Link } from 'react-router-dom';
/**
 * @description Sidebar
 */

function Sidebar() {
    const style = {
        display: 'flex',
        justifyContent: 'center',

        width: '15%',
        height: 'calc(100vh - 200px)',
        border: '3px solid red',
        boxSizing: 'border-box',
    };
    return (
        <div style={style}>
            <ul>
                <li>
                    <Link to="/Checkbox">CheckBox </Link>
                </li>
                <li>
                    <Link to="/Password">Password </Link>
                </li>
                <li>
                    <Link to="/Radio">Radio </Link>
                </li>
                <li>
                    <Link to="/Select">Select</Link>
                </li>
                <li>
                    <Link to="/TextArea">TextArea</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
