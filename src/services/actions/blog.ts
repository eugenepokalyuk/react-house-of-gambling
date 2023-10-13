import { fetchBlogData } from "../../utils/api";
import { useAppDispatch } from "../hooks/hooks";

export const FETCH_BLOG_REQUEST: "FETCH_BLOG_REQUEST" =
    "FETCH_BLOG_REQUEST";
export const FETCH_BLOG_SUCCESS: "FETCH_BLOG_SUCCESS" =
    "FETCH_BLOG_SUCCESS";
export const FETCH_BLOG_FAILURE: "FETCH_BLOG_FAILURE" =
    "FETCH_BLOG_FAILURE";

export type TBlog =
    | IFetchBlogRequestAction
    | IFetchBlogSuccessAction
    | IFetchBlogFailureAction;

export interface IFetchBlogRequestAction {
    readonly type: typeof FETCH_BLOG_REQUEST;
}

export interface IFetchBlogSuccessAction {
    readonly type: typeof FETCH_BLOG_SUCCESS;
    readonly payload: any;
}

export interface IFetchBlogFailureAction {
    readonly type: typeof FETCH_BLOG_FAILURE;
    readonly payload: string;
}

export const fetchBlogRequest = (): IFetchBlogRequestAction => ({
    type: FETCH_BLOG_REQUEST,
});

enum ActionTypes {
    FETCH_BLOG_REQUEST = "FETCH_BLOG_REQUEST",
    FETCH_BLOG_SUCCESS = "FETCH_BLOG_SUCCESS",
    FETCH_BLOG_FAILURE = "FETCH_BLOG_FAILURE",
    FETCH_BLOG_CLEAR = "FETCH_BLOG_CLEAR",
}

export const fetchBlogSuccess = (
    data: any[]
): IFetchBlogSuccessAction => ({
    type: ActionTypes.FETCH_BLOG_SUCCESS,
    payload: data,
});

export const fetchBlogFailure = (
    error: string
): IFetchBlogFailureAction => ({
    type: FETCH_BLOG_FAILURE,
    payload: error,
});

export function getBlog() {
    return function (dispatch: ReturnType<typeof useAppDispatch>) {
        dispatch({
            type: FETCH_BLOG_REQUEST,
        });

        // fetchBlogData()
        //     .then((res) => {
        //         dispatch(fetchBlogSuccess(res.data));
        //     })
        //     .catch((error) =>
        //         dispatch(fetchBlogFailure(error))
        //     );
    };
}