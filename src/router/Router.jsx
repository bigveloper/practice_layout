import { Route, Switch } from 'react-router-dom';
import Checkbox from '../pages/Checkbox';
import Password from '../pages/Password';
import Radio from '../pages/Radio';
import Select from '../pages/Select';
import Textarea from '../pages/Textarea';

/**
 * @description Router
 */

function Router() {
    return (
        <Switch>
            <Route path="/Checkbox" component={Checkbox} />
            <Route path="/Password" component={Password} />
            <Route path="/Radio" component={Radio} />
            <Route path="/Select" component={Select} />
            <Route path="/Textarea" component={Textarea} />
        </Switch>
    );
}

export default Router;
