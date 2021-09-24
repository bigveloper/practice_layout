import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
/**
 * @description Main
 */

function Main() {
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
