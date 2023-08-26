import { Route, Routes } from "react-router-dom"
import { Login } from "./login/Login"
import {ProductList} from "./product/Products.jsx"

export const AllRoutets = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} ></Route>
                <Route path="/products" element={<ProductList />} />
                
            </Routes>
        </>
    )
}