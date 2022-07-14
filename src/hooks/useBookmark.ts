import { useAppSelector } from "hooks"
import { userDetailsType } from "types/auth.types"

export const useBookmark = () => {
    const {allUsers, authToken} = useAppSelector(store => store.auth)

    const userData:userDetailsType|undefined = allUsers &&  allUsers.find(user => user.id === authToken)
    const bookmarkData = userData?.bookmark
    
    return bookmarkData ?? []
}