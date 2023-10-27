import { createSlice } from "@reduxjs/toolkit";
// import { isElement } from "react-dom/test-utils";

export const UserSlice = createSlice({
    name:'User',
    initialState:{
        isLoading:false,
        isError:false,
        data:{},
        error:{},
        message:''
    },
    reducers: {
        onUserSubmit: (state) =>{
            return {...state,isLoading:true,isError:false,data:{},error:{},message:''}
        },
        onUserSubmitSuccess: (state , {payload})=>{
            const {data={},message='',status_code=200}=payload;
            return{
                ...state,
                isError:false,
                isLoading:false,
                data,
                message,
                status_code,
                error:{}
            }
        },
        onUserSubmitError:(state , {payload})=>{
            const { data={},message='',status_code=400}=payload;
            return{
                ...state,
                data,
                message,
                status_code,
                isLoading:false,
                isError:true,
            }
        } 
    }
})

export const {onUserSubmit,onUserSubmitError,onUserSubmitSuccess} = UserSlice.actions;

export default UserSlice.reducer;