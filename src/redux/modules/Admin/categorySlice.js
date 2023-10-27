import { createSlice } from "@reduxjs/toolkit";
// import reducers from "../../storeReducers";

export const categorySlice = createSlice({
    name:'Category',
    initialState:{
        data:{},
        error:{},
        message:'',
        isLoading:false,
        isError:false
    },
    reducers :{
        onCategorySubmit:(state) =>{
            return{...state,data:{},error:{},message:'',isLoading:true,isError:false}
        },
        onCategorySubmitSuccess:(state , {payload})=>{
            const { data={},message='',status_code=200}=payload;
            return{
                ...state,
                data,
                message,
                status_code,
                isLoading:false,
                isError:false,
                error:{}
            }
        },
        onCategorySubmitError:(state , {payload})=>{
            const { data={},message='',status_code=400}=payload;
            return{
                ...state,
                data,
                message,
                status_code,
                isLoading:false,
                isError:true,
                error:{}
            }
        }  
    }
})


export const {onCategorySubmit,onCategorySubmitError,onCategorySubmitSuccess} = categorySlice.actions;

export default categorySlice.reducer;