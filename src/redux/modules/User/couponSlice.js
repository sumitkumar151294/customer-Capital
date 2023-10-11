import { createSlice } from "@reduxjs/toolkit";

export const couponSlice = createSlice({
    name:'coupon',
    initialState: {
        isLoading: false,
        isError: false,
        data: {},
        error:{},
        message:''
    },

    reducers:{
        onCouponSubmit: (state) => {
            debugger
            return {...state, isLoading: true, data: {}, error:{}, message:'', isError:false}
        },

        onCouponSubmitSuccess : (state , {payload}) =>{
            const { data ={} , message = '' , status_code =200} = payload;
            debugger
            return{
                ...state,
                isLoading:false,
                isError:false,
                data,
                error:{},
                message,
                status_code
            };
        },
        onCouponSubmitError: (state , {payload}) =>{
            const { data={}, message = '' , status_code = 400 } = payload;

            return{
                ...state,
                data,
                message,
                status_code,
                error:{},
                isLoading:false,
                isError:true
            };
        },

        onCouponReset: (state) =>{
            return {...state , isLoading:false, data:{},message:'', error:{} , status_code:400, isError:false};
        }
    }
});

export const {onCouponSubmit ,onCouponSubmitSuccess , onCouponSubmitError , onCouponReset } = 
couponSlice.actions;

export default couponSlice.reducer;