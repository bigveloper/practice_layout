import '../layout/Header';
import '../layout/Footer';
import '../layout/Sidebar';
import '../layout/Contents';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Contents from '../layout/Contents';

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
            <Header />
            <div style={style}>
                <Sidebar />
                <Contents />
            </div>
            <Footer />
        </>
    );
}

export default Main;
