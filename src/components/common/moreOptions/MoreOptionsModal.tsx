export const MoreOptionsmOdal = () => {
    return (
        <div className="bg-slate-100 p-2 absolute top-10 right-0 w-40 md:w-60 rounded border-2">
            <div className="flex gap-4 items-center mb-2">
            <span className="material-icons text-xl md:text-2xl cursor-pointer">edit</span>
                <p className="text-base">Edit</p>
                
            </div>
            <div className="flex gap-4 items-center">
            <span className="material-icons text-2xl cursor-pointer">delete</span>
                <p className="text-base">Delete</p>
                
            </div>
        </div>
    )
}