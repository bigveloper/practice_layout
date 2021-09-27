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
            <Route path="/checkbox" component={Checkbox} />
            <Route path="/password" component={Password} />
            <Route path="/radio" component={Radio} />
            <Route path="/select" component={Select} />
            <Route path="/textarea" component={Textarea} />
        </Switch>
    );
}

export default Router;
