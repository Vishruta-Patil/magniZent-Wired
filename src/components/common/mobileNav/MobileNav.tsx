export const MobileNav = () => {
    const menuData = ["home", "explore", "bookmark", "notifications", "person"];
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-200 py-1 flex justify-around text-primary-color">
                  {menuData.map((icon, index) => (
                    <span className="material-icons text-3xl" key={index}>{icon}</span>
                  ))}
                </div>
    )
}