import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        isLoading: false,
        isError: false,
        data: {},
        error: {},
        message:''
    },
    reducers:{
        onLoginSubmit: (state) =>{
          
            return{...state,isLoading:true,isError:false,data:{},error:{},message:''}
        },

        onLoginSubmitSuccess: (state, {payload}) =>{
            const {data={}, message='',status_code=200}=payload;
            return{
                ...state,
                isLoading:false,
                isError:false,
                data,
                message,
                status_code,
                error:{},
                
            }
        },

        onLoginSubmitError : (state, {payload}) =>{
            const {data ={} , message='' , status_code = 400}=payload;
            return{
                ...state,
                data,
                message,
                status_code,
                isLoading:false,
                isError:true,
                error:{}
            }
        },

        onSignUpSubmit: (state) =>{
          
            return{...state,isLoading:true,isError:false,data:{},error:{},message:''}
        },

        onSignUpSubmitSuccess: (state, {payload}) =>{
            const {data={}, message='',status_code=200}=payload;
            return{
                ...state,
                isLoading:false,
                isError:false,
                data,
                message,
                status_code,
                error:{},
                
            }
        },

        onSignUpSubmitError : (state, {payload}) =>{
            const {data ={} , message='' , status_code = 400}=payload;
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
        export const {onLoginSubmit , onLoginSubmitError , onLoginSubmitSuccess , onSignUpSubmit , onSignUpSubmitSuccess, onSignUpSubmitError}= loginSlice.actions;

        export default loginSlice.reducer;

    
    
