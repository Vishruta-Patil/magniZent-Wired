import Home from "pages/home"
import { NotFoundPage } from "pages/notFound"
import { Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Router