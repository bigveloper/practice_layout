import { useRecoilState } from 'recoil';
import { loginState } from '../global/loginState';

/**
 * @description Header
 */
function Header(props) {
    // recoil
    const [isLogin, setIsLogin] = useRecoilState(loginState);

    // state
    const style = {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',

        height: '100px',
        lineHeight: '100px',
        border: '3px solid red',
    };

    // event
    const onLogout = () => setIsLogin(false);

    // view
    return (
        <>
            <h1 style={style}>{props.title}</h1>
        </>
    );
}

export default Header;
