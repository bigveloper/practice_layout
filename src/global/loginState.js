import { atom, selector } from 'recoil';

/**
 * @tutorial https://recoiljs.org/ko/
 */
const loginState = atom({
    key: 'loginState', // 유일한 값
    default: false,
});

export { loginState };
