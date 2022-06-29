import type { RootState, AppDispatch } from "redux/store"
import type { TypedUseSelectorHook } from "react-redux"
import { useSelector, useDispatch } from "react-redux"

export const useAppDispatch : () => AppDispatch = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector