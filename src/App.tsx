import './App.css'


import SecureRoute from './components/common/secureRoute';
import Home from './components/ui/Home.tsx';
import Login from './components/auth/Login';
// import Navbar from './components/ui/Nav.tsx'
import Registration from './components/auth/Register';
// import UserDashboard from './components/dashboard/UserDashboard';
import { useEffect, useLayoutEffect, useState } from 'react';
import { RenderState, renderState$, updateRenderState } from './components/observables/appObservables.ts';
import { isAuthenticated } from './components/lib/auth.ts';
// import ProfileSetup from './components/common/ProfileSetup.tsx';
import { UserInterface, currentUser$ } from './components/observables/authObservable.ts';
// import AddActivity from './components/dashboard/AddActivity.tsx';
import AddGoal from './components/dashboard/addGoal.tsx';
// import Dashboard from './components/dashboard/Dashboard.tsx';
// import Shop from './components/common/Shop.tsx';
// import Success from './components/common/Success.tsx';
// import Cancel from './components/common/Cancel.tsx';
import Explore from './components/common/Explore.tsx';
// import ContactPage from './components/common/ContactUs.tsx';
// import TermsOfService from './components/common/TOS.tsx';
// import Careers from './components/common/Careers.tsx';

function App() {
  // Assuming you have a function to get user profile data
  const [renderState, setRenderState] = useState<RenderState>(RenderState.LOGIN);
  const [user, setUser] = useState<UserInterface | undefined>();
  const [pathname, setPathname] = useState<string>()
  const [isAuth, setIsAuth] = useState(false);
  let Child: JSX.Element | undefined = undefined;




  useLayoutEffect(() => {
    const renderSub = renderState$.subscribe(setRenderState);
    const userSub = currentUser$.subscribe(setUser);
    return () => {
      renderSub.unsubscribe();
      userSub.unsubscribe();
    }
  }, [renderState])

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated(); // This should be a function that checks auth status
      setPathname(window.location.pathname)
      setIsAuth(authStatus);
    };

    // Set up a subscription or a similar method to listen to auth changes
    // This could be a simple interval, event listener, or a subscription to an auth service
    const authListener = setInterval(checkAuth, 500); // Check auth status every second

    return () => clearInterval(authListener); // Cleanup on component unmount
  }, []); // Empty dependency array ensures this runs once on mount and not on every render

  useEffect(() => {
    if (pathname) {


      if (pathname.includes('/success')) {
        updateRenderState(RenderState.SUCCESS);
      } else if (pathname.includes('/cancel')) {
        updateRenderState(RenderState.CANCEL);
      }
    }
  }, [pathname])

  switch (renderState) {
    case RenderState.HOME:
      Child = <Home isAuth={isAuth} />;
      break;
    // case RenderState.LOGIN:
    //   Child = isAuth ? <SecureRoute><UserDashboard /></SecureRoute> : <Login />;
    //   break;
    case RenderState.REGISTER:
      // Child = isAuth ? <SecureRoute><UserDashboard /></SecureRoute> : <Registration />;
        Child = <Registration />
      break;
    // case RenderState.USER_DASHBOARD:
    //   Child = <SecureRoute><UserDashboard /></SecureRoute>;
    //   break;
    // case RenderState.PROFILE_SETUP:
    //   Child = <SecureRoute><ProfileSetup /></SecureRoute>;
    //   break;
    // case RenderState.ACTIVITIES:
      // Child = <SecureRoute><AddActivity></AddActivity></SecureRoute>
      // break;
    case RenderState.GOALS:
      Child = <SecureRoute><AddGoal></AddGoal></SecureRoute>
      break;
    // case RenderState.DASHBOARD:
    //   Child = <SecureRoute><Dashboard></Dashboard></SecureRoute>
    //   break;
    // case RenderState.CONTACT:
    //   Child = <ContactPage></ContactPage>
    //   break;
    // case RenderState.SHOP:
    //   Child = <Shop></Shop>
    //   break;
    // case RenderState.SUCCESS:
    //   Child = <Success></Success>
    //   break;
    case RenderState.EXPLORE:
      Child = <Explore></Explore>
      break;
    // case RenderState.CANCEL:
    //   Child = <Cancel></Cancel>
    //   break;
    // case RenderState.TOS:
    //   Child = <TermsOfService></TermsOfService>
    //   break;
    // case RenderState.CAREERS:
    //   Child = <Careers></Careers>
    //   break;
    default:
      Child = <Login />;
      break;
  }

  return (
    <div className='root-layout'>
      <header>
        {/* <Navbar isAuth={isAuth} /> */}
      </header>
      <main>
        {Child}
      </main>
    </div>
  );
}

export default App;
