import { RenderState, updateRenderState } from "../observables/appObservables";
// import { updateUser } from "../observables/authObservable";
import { removeToken } from "./auth";
// Function to sign up a user with email and password
// export const register = (email: string, password: string) => {
//     return createUserWithEmailAndPassword(auth, email, password);
// };

// Function to log in a user with email and password
// export const login = (email: string, password: string) => {
//     return signInWithEmailAndPassword(auth, email, password);
// };

export const logout = () => {
    removeToken();
    // toast.success('logged out.');
    updateRenderState(RenderState.LOGIN)
}

// export const doAuth = async () => {
//     onAuthStateChanged(auth, (currentUser) => {
//         if (currentUser === null) {
//              updateUser(undefined)
//         } else {
//             updateUser(currentUser);
//         }
//     })
// }