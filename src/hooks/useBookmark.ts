import { useAppDispatch, useAppSelector } from "hooks"
import { useEffect } from "react"
import { getBookmarkList } from "redux/slices/userSlice"
import { getAllUsers } from "services/authService"
import { userDetailsType } from "types/auth.types"

export const useBookmark = () => {
    const {allUsers, authToken} = useAppSelector(store => store.auth)

    const userData:userDetailsType|undefined = allUsers.find(user => user.id === authToken)
    const bookmarkData = userData?.bookmark
    
    return bookmarkData
}