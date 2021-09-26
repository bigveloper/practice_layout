/**
 * @description Header
 */

function Header(props) {
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        height: '100px',
        border: '3px bold solid red',
    };
    return <h1 style={style}>{props.title}</h1>;
}

export default Header;
