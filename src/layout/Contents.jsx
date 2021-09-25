import Router from '../router/Router';

/**
 * @description Contents
 */

function Contents() {
    const style = {
        display: 'flex',
        justifyContent: 'center',

        width: '85%',
        height: 'calc(100vh - 200px)',
        border: '1px solid pink',
        boxSizing: 'border-box',
    };
    return (
        <div style={style}>
            <Router />
        </div>
    );
}

export default Contents;
