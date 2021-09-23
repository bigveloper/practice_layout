import Router from '../router/Router';

/**
 * @description Contents
 */
function Contents() {
    // css
    const style = {
        display: 'flex',
        alignItems: 'center',
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
