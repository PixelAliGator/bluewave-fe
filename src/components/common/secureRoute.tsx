import { RenderState, updateRenderState } from '../observables/appObservables';
import { removeToken, isAuthenticated } from '../lib/auth';

const SecureRoute = ({ children }:any) => {
  
    if (!isAuthenticated()) {
        removeToken();
      }

  return isAuthenticated() ? children : updateRenderState(RenderState.LOGIN);
};

export default SecureRoute;
