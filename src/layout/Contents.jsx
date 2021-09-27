import Router from '../router/Router';
/**
 * @description Contents
 */

function Contents() {
    // css
    const style = {
        display: 'flex',
        justifyContent: 'center',

        width: '85%',
        height: 'calc(100vh - 200px)',
        border: '3px solid red',
    };

    // view
    return (
        <div style={style}>
            <Router />
        </div>
    );
}

export default Contents;
