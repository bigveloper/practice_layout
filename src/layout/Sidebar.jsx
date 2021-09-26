import { Link } from 'react-router-dom';

/**
 * @description Sidebar
 */

function Sidebar() {
    const style = {
        display: 'flex',
        justfyContent: 'center',

        width: '15%',
        height: 'calc(100vh - 200px)',
        border: '3px solid red',
        boxSizing: 'border-box',
    };
    return (
        <div style={style}>
            <ul>
                <li>
                    <Link to="/todolist">ToDoList</Link>
                </li>
                <li>
                    <Link to="/menu02">Menu02</Link>
                </li>
                <li>
                    <Link to="/menu03">Menu03</Link>
                </li>
                <li>
                    <Link to="/menu04">Menu04</Link>
                </li>
                <li>
                    <Link to="/menu05">Menu05</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
