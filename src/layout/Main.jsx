import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Sidebar from '../layout/Sidebar';
import Footer from '../layout/Sidebar';

/**
 * @description Main
 */

function Main() {
    // css
    const style = {
        display: 'flex',
    };
    return (
        <>
            <Header title="Header" />
            <div style={style}>
                <Sidebar />
                <Contents />
            </div>
            <Footer title="Footer" />
        </>
    );
}

export default Main;
