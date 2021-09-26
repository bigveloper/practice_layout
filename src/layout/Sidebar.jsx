import { Link } from 'react-router-dom';

/**
 * @description Sidebar
 */

function Sidebar() {
    const style = {
        display: 'flex',
        justfyContent: 'center',

        width: '85%',
        height: 'calc(100vh - 200px)',
        border: '3px solid red',
        boxSizing: 'border-box',
    };
    return (
        <div style={style}>
            <ul>
                <li>
                    <link to="/menu01">Menu01</link>
                </li>
                <li>
                    <link to="/menu02">Menu02</link>
                </li>
                <li>
                    <link to="/menu03">Menu03</link>
                </li>
                <li>
                    <link to="/menu04">Menu04</link>
                </li>
                <li>
                    <link to="/menu05">Menu05</link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
