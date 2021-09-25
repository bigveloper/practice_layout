import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Sidebar from '../layout/Sidebar';
import Contents from '../layout/Contents';
/**
 * @description Main
 */

function Main() {
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
