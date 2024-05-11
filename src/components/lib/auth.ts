import { CurrentUser } from "./types";

export function setToken(token: string):void {
    window.localStorage.setItem('token', token)
}

export function getToken():(string|null) {
    return window.localStorage.getItem('token')
}
export function removeToken():void {
    localStorage.removeItem('token')
}



export interface Payload {
    iat: number;
    exp: number;
    user: CurrentUser
}

export function getPayload():( string[]) {
    const token = getToken()
    if (!token) return []
    const parts = token.split('.')
    if (parts.length < 3) return []
    return JSON.parse(atob(parts[1]))
}

export function isAuthenticated(): boolean {
    const payload = getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
}

export function isOwner(userId: string): boolean {
    const payload = getPayload()
    if (!payload) return false
    return userId === payload.userId
}