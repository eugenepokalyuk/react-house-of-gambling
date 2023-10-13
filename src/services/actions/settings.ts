export const FETCH_SWITCH_LANGUAGE_REQUEST: "FETCH_SWITCH_LANGUAGE_REQUEST" =
    "FETCH_SWITCH_LANGUAGE_REQUEST";
export const FETCH_SWITCH_LANGUAGE_SUCCESS: "FETCH_SWITCH_LANGUAGE_SUCCESS" =
    "FETCH_SWITCH_LANGUAGE_SUCCESS";
export const FETCH_SWITCH_LANGUAGE_FAILURE: "FETCH_SWITCH_LANGUAGE_FAILURE" =
    "FETCH_SWITCH_LANGUAGE_FAILURE";

export type TBlog =
    | IFetchSwitchLanguageRequestAction
    | IFetchSwitchLanguageSuccessAction
    | IFetchSwitchLanguageFailureAction;

export interface IFetchSwitchLanguageRequestAction {
    readonly type: typeof FETCH_SWITCH_LANGUAGE_REQUEST;
}

export interface IFetchSwitchLanguageSuccessAction {
    readonly type: typeof FETCH_SWITCH_LANGUAGE_SUCCESS;
    readonly payload: any;
}

export interface IFetchSwitchLanguageFailureAction {
    readonly type: typeof FETCH_SWITCH_LANGUAGE_FAILURE;
    readonly payload: string;
}

export const fetchBlogRequest = (): IFetchSwitchLanguageRequestAction => ({
    type: FETCH_SWITCH_LANGUAGE_REQUEST,
});

enum ActionTypes {
    FETCH_SWITCH_LANGUAGE_REQUEST = "FETCH_SWITCH_LANGUAGE_REQUEST",
    FETCH_SWITCH_LANGUAGE_SUCCESS = "FETCH_SWITCH_LANGUAGE_SUCCESS",
    FETCH_SWITCH_LANGUAGE_FAILURE = "FETCH_SWITCH_LANGUAGE_FAILURE",
    FETCH_BLOG_CLEAR = "FETCH_BLOG_CLEAR",
}

export const fetchBlogSuccess = (
    data: any[]
): IFetchSwitchLanguageSuccessAction => ({
    type: ActionTypes.FETCH_SWITCH_LANGUAGE_SUCCESS,
    payload: data,
});

export const fetchBlogFailure = (
    error: string
): IFetchSwitchLanguageFailureAction => ({
    type: FETCH_SWITCH_LANGUAGE_FAILURE,
    payload: error,
});