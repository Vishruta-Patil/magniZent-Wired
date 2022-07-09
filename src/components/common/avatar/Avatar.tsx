import { useAppDispatch, useAppSelector } from "hooks"
import { useEffect } from "react"
import { getAvatarProfile } from "services/authService"

export const Avatar = ({classnames} : {classnames:string}) => {
    const {avatar, name} = useAppSelector(store => store.auth)
    const dispatch = useAppDispatch()
   
    useEffect(() => {
        dispatch(getAvatarProfile())
    }, [])
    
    return (
        <>
        {avatar!=="no_image" ? 
        (
            <img
              src={avatar}
              alt="avatar"
              className={`rounded-full ${classnames}`}
            />
          ) :
        (
            <div className="h-14 w-14 rounded-full relative bg-blue-500 text-white-neutral flex items-center justify-center text-2xl">
              {name.split(' ').map(item => item.slice(0,1)).join('') || "VP"}
            </div>
          )
         
          
          }
          </>
    )

}