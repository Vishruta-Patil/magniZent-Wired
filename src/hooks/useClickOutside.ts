import { useEffect, useRef } from "react"

export const useClickOutside = (givenHandler:any) => {
    const domRef:any = useRef()

    useEffect(() => {
        let reqHandler = (e:any) => {
           if (!domRef.current.contains(e.target.value)) {
                givenHandler()
            } 
        }

        document.addEventListener("mousedown", reqHandler)

        return () => {
            document.removeEventListener("mousedown", reqHandler)
        }

    }, [])
    return domRef
}