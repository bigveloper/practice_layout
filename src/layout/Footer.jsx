/**
 * @description Footer
 */

function Footer(props) {
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        height: '100px',
        border: '1px solid pink',
    };
    return <h1 style={style}>{props.title}</h1>;
}

export default Footer;
