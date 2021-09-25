import { Router } from 'react-router-dom';
/**
 * @description Contents
 */

function Contents() {
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        width: '85%',
        height: 'calc(100vh-200px)',
        border: '1px solid black',
    };
    return (
        <div style={style}>
            <Router />
        </div>
    );
}

export default Contents;
