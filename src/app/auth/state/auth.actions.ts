import { createAction, props } from "@ngrx/store";
import { User } from "../../shared/models/user.model";

export const LOGIN_START = '[Auth Page] login start';
export const LOGIN_SUCCESS = '[Auth Page] login success';
export const LOGIN_FAIL = '[Auth Page] login fail';

export const SIGNUP_START = '[Auth Page] signup start';
export const SIGNUP_SUCCESS = '[Auth Page] signup success';
export const SIGNUP_FAIL = '[Auth Page] signup fail';


export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string, password: string}>()
)

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
)

export const loginFail = createAction(LOGIN_FAIL)


export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string, password: string }>()
)


export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User }>()
)
