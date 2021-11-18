import React, {useEffect, useState} from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {useQuery, useLazyQuery, useMutation} from '@apollo/client'
import {GetAllPassenger, SearchById} from "../graphQL/Query";
import {DeletePassenger, EditPassenger, InsertPassenger} from "../graphQL/Mutation";

function Home() {
    const {data: allData, loading: loadingAllData, error: errorAllData} = useQuery(GetAllPassenger);
    console.log(allData);
    const [getPassangerById, {data: dataId, loading: loadingDataId, errorId}] = useLazyQuery(SearchById);
    const [deletePassenger, {loading: loadingDelete}] = useMutation(DeletePassenger, {refetchQueries: [GetAllPassenger]});
    const [insertPassenger, {loading: loadingInsert}] = useMutation(InsertPassenger, {refetchQueries: [GetAllPassenger]});
    const [updatePassenger, {loading: loadingUpdate}] = useMutation(EditPassenger, {refetchQueries: [GetAllPassenger]});
    

    useEffect(() => {
        if(allData) {
            setDataPassenger(allData.Passenger);
        }
        if(errorAllData){
            console.log("error:" + errorAllData);
            return null;
        }
    }, [allData, errorAllData])
    //initialize state
    const [dataPassenger, setDataPassenger] = useState([]);
    const [idPassenger, setIdPassenger] = useState(null)

    const handleSearchId = (e) => {
        getPassangerById({
            variables:{
                id: idPassenger,
            }
        })
    }

    const hapusPengunjung = (id) => {
        deletePassenger({
            variables:{
                id
            }
        })
    };
    
    const tambahPengunjung = (newUser) => {
        insertPassenger({
            variables:{
                object: {
                      jk: newUser.jk,
                      nama: newUser.nama,
                      umur: newUser.umur,
                    }
            }
        })
    };

    const editPengunjung = (editUser) => {
        updatePassenger({
            variables:{
                id: editUser.id,
                nama: editUser.nama,
                jk: editUser.jk,
                umur: editUser.umur,
            }
        })
    }
    if (errorAllData || errorId){
        console.log(errorAllData)
        console.log(errorId)
        return null;
    }
    if(loadingAllData || loadingDataId){
        return(
            <div>
                <p className='text-center'>Loading...</p>
            </div>
        )
    }
    return (
        <div>
            <Header/>
            <div>
                <input
                    className='input-text mb-3' 
                    type='number' 
                    placeholder='id pelanggan..'
                    value={idPassenger} 
                    onChange={(e) => setIdPassenger(e.target.value)}/>
                <button 
                    className="btn btn-primary mb-3" 
                    onClick={handleSearchId}
                >Search</button>
            </div>
            <br/>
            {!errorAllData && !loadingAllData && !loadingDataId && (
                <ListPassenger
                    data={dataId ? dataId?.Passenger : allData?.Passenger}
                    hapusPengunjung={hapusPengunjung}
                    editPengunjung={editPengunjung}
                />
            )}
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
    )
}

export default Home;