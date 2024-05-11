import { BehaviorSubject  } from "rxjs";

export enum RenderState{
    HOME,
    LOGIN,
    REGISTER,
    PROFILE_SETUP,
    SHOP,
    USER_DASHBOARD,
    DASHBOARD,
    ACTIVITIES,
    GOALS,
    EXPLORE,
    SUCCESS,
    CANCEL,
    CONTACT,
    TOS,
    CAREERS
}

export const enumRef = ['home','login','register', 'user_dashboard','shop','profileSetup', 'activities', 'goals', 'dashboard', 'contact', 'TOS', 'careers'];

const initialState: RenderState = RenderState.LOGIN;

export const renderState$ = new BehaviorSubject<RenderState>(initialState);

export const updateRenderState = (state: RenderState) => {
    renderState$.next(state);
}