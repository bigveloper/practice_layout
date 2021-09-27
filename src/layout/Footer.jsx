/**
 * @description Footer
 */

function Footer(props) {
    // css
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        height: '100px',
        lineHeight: '100px',
        border: '3px solid red',
    };

    // view
    return <h1 style={style}>{props.title}</h1>;
}

export default Footer;
