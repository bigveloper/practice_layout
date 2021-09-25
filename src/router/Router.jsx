import { Route, Switch } from 'react-router-dom';
/**
 * @description Router
 */

function Router() {
    return (
        <Switch>
            <Route path="menu01" component={Menu01} />
            <Route path="menu02" component={Menu02} />
            <Route path="menu03" component={Menu03} />
            <Route path="menu04" component={Menu04} />
            <Route path="menu05" component={Menu05} />
        </Switch>
    );
}

export default Router;
