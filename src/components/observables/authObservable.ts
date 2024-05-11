import { BehaviorSubject } from 'rxjs'


export interface UserInterface {
   id: string;
   email: string;
   username:string;
}
export const currentUser$ = new BehaviorSubject<UserInterface>({} as UserInterface);

export const updateUser = (user: UserInterface | undefined): (UserInterface | undefined) => {

    if(user === undefined){
        return undefined;
    }
    currentUser$.next(user);
    return user;
}