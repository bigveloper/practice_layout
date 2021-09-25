import Router from '../router/Router';

/**
 * @description Contents
 */

function Contents() {
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        width: '85%',
        height: 'calc(100vh - 200px)',
        border: '3px solid blue',
    };
    return (
        <div style={style}>
            <Router />
        </div>
    );
}

export default Contents;
