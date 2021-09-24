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
        border: '1px solid darkgrey',
        boxSizing: 'border-box',
    };
    return (
        <div style={style}>
            <ul>
                <ui>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </ui>
            </ul>
        </div>
    );
}

export default Sidebar;
