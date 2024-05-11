import { RenderState, updateRenderState } from "../observables/appObservables";
import "./ui/home.css";

interface HomeInterface {
    isAuth: boolean;
}

const Home = ({isAuth}: HomeInterface) => {
    return (
        <div className="home-container">
            <h1 className="title">Bluewave</h1>
            <p className="tagline">Dive Deep, Swim Smarter</p>
            {!isAuth && (
                <div className="buttons-left">
                    <button className="menu-button" onClick={() => updateRenderState(RenderState.REGISTER)}>Register</button>
                    <button className="menu-button" onClick={() => updateRenderState(RenderState.LOGIN)}>Login</button>
                </div>
            )}
            <div className="buttons-right">
                <button className="menu-button" onClick={() => updateRenderState(RenderState.SHOP)}>Shop</button>
                <button className="menu-button" onClick={() => updateRenderState(RenderState.CONTACT)}>Contact Us</button>
                <button className="menu-button" onClick={() => updateRenderState(RenderState.TOS)}>Terms of Service</button>
                <button className="menu-button" onClick={() => updateRenderState(RenderState.CAREERS)}>Careers</button>
            </div>
        </div>
    );
};

export default Home;
