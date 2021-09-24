import Router from '../router/Router';

/**
 * @description Contents
 */

function Contents() {
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        height: 'calc(100vh - 200px)',
        width: '85%',
        border: '1px solid darkgrey',
    };

    // view
    return (
        <div style={style}>
            <Router />
        </div>
    );
}

export default Contents;
