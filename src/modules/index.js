import { configureStore } from "@reduxjs/toolkit"

import calculate from "./calculate"

export default configureStore({
    reducer: {
        calculate
    }
})