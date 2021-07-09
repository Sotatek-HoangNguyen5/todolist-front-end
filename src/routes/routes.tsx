import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import { routeConstants } from '../constants';

const routers = {
  dashboard: {
    exact: true,
    path: routeConstants.DASHBOARD,
    component: Dashboard,
  },
  signup: {
    exact: true,
    path: routeConstants.SIGNUP,
    component: SignUp,
  },
  signin: {
    exact: true,
    path: routeConstants.SIGNIN,
    component: SignIn,
  },
};
export default routers;
