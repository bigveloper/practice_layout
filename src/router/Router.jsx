import { Route, Switch } from 'react-router-dom';

import Menu01 from '../pages/Menu01';
import Menu02 from '../pages/Menu02';
import Menu03 from '../pages/Menu03';
import Menu04 from '../pages/Menu04';
import Menu05 from '../pages/Menu05';

/**
 * @description Router
 */
function Router() {
    return (
        <Switch>
            <Route path="/menu01" component={Menu01} />
            <Route path="/menu02" component={Menu02} />
            <Route path="/menu03" component={Menu03} />
            <Route path="/menu04" component={Menu04} />
            <Route path="/menu05" component={Menu05} />
        </Switch>
    );
}

export default Router;
