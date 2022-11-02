import React,{ useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getListMobil } from '../../actions/mobilaction';
import '../../App.css';

function ListMobil() {
    const { getListMobilResult,getListMobilLoading,getListMobilError } = useSelector((state) => state.MobilReducers)
    const dispatch = useDispatch();
    useEffect(() =>{
      // get element list mobil :
      console.log("1. use effect component did mount")
      dispatch(getListMobil());
    },[dispatch])
    return (
      <div>
        <h4>List Mobil</h4>
        <tr>
          <th>Merek</th>
          <th>Plat</th>
          <th>Tipe Mobil</th>
          <th>Kapasitas Penumpang</th>
        </tr>
        {getListMobilResult ? (
          getListMobilResult.map((mobil) => {
            return (
              // <p key={mobil.id}>Merek mobil : {mobil.manufacture} - Plat : {mobil.plate} - Tipe mobil : {mobil.model} - Kapasitas penumpang : {mobil.capacity}</p>
              <tr key={mobil.id} className="tbl_mobil">
                <td>{mobil.manufacture}</td>
                <td>{mobil.plate}</td>
                <td>{mobil.model}</td>
                <td>{mobil.capacity}</td>
              </tr>
            )
          })
        ) : getListMobilLoading ? (
            <p>Loading.....</p>
        ) : (
          <p>{getListMobilError} ? getListMobilError : "Data Kosong"</p>
        )}
      </div>
    );
  }
  
  export default ListMobil;