import axios from "axios";
// import { response } from "express";

export const GET_LIST_MOBIL = "GET_LIST_MOBIL";

export const getListMobil = () => {
    console.log("2. masuk action");
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_LIST_MOBIL,
            payload :{
                loading : true,
                data : false,
                errorMessage : false

            }
        })

        // get api
        axios({
            method : 'GET',
            url : 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
            timeout : 120000
        })
            .then((response) => {
                console.log("3. berhasil dapat data",response);
                // berhasil get api
                dispatch({
                    type: GET_LIST_MOBIL,
                    payload :{
                        loading : false,
                        data : response.data,
                        errorMessage : false
        
                    }
                })
            })
            .catch((error) => {
                console.log("4. gagal dapat data",error);
                // gagal get api
                dispatch({
                    type: GET_LIST_MOBIL,
                    payload :{
                        loading : false,
                        data : false,
                        errorMessage : error.message
        
                    }
                })
            })
    }
}