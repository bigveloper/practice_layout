/**
 * @description Header
 */
function Header(props) {
    // css
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        height: '100px',
        border: '1px solid darkgrey',
    };

    // view
    return <h1 style={style}>{props.title}</h1>;
}

export default Header;
