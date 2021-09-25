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
        border: '1px solid darkgray',
        boxSizing: 'border-box',
    };

    // view
    return (
        <div style={style}>
            <ul>
                <li>
                    <Link to="/menu01">Menu01</Link>
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
