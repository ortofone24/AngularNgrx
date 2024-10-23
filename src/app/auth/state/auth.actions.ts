import { createAction, props } from "@ngrx/store";

export const LOGIN_START = '[Auth Page] login start';
export const LOGIN_SUCCESS = '[Auth Page] login success';
export const LOGIN_FAIL = '[Auth Page] login fail';



export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string, password: string}>()
)

export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFail = createAction(LOGIN_FAIL)


/*export const ADD_POST_ACTION = '[Posts Page] add post';*/



//export const addPost = createAction(
//  ADD_POST_ACTION,
//  props<{ post: Post }>()
//)
