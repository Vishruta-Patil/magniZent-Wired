import { storage } from "firebase-config"
import { ref, uploadBytes } from "firebase/storage"

export const uploadAvatar = async({avatarImage, id} : {avatarImage : any, id:any}) => {
    // try {
    // const avatarRef = ref(storage, `avatar/${id}`)
    // const res = await uploadBytes(avatarRef, avatarImage)
    // console.log("Avatar uploaded successfully")
    // return res 
    // } catch(err) {
    //     console.log(err)
    // }
}