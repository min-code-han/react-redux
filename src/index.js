import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux"
import Home from "./routes/Home";
import Details from "./routes/Details";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/:id",
        element: <Details />
    }
])


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </>
)


