import React, {useEffect, useState} from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import useSearchPassenger from "../hooks/useSearchPassenger";
import useSubsPassenger from "../hooks/useSubsPassenger";
import useEditPassenger from "../hooks/useEditPassenger";
import useDeletePassenger from "../hooks/useDeletePassenger";
import useInsertPassenger from "../hooks/useInsertPassenger";

function Home() {
    //initialize state
    const [dataPassenger, setDataPassenger] = useState([]);
    const [idPassenger, setIdPassenger] = useState(null);

    const {getPassengerById, searchData, searchError, searchLoading, subscribePassenger} = useSearchPassenger();
    const {subsData, subsLoading, subsError} = useSubsPassenger();
    const {editPassenger, editLoading} = useEditPassenger();
    const {deletePassenger, delLoading} = useDeletePassenger();
    const {insertPassenger, insLoading} = useInsertPassenger();
    
    useEffect(() => {
        if(searchData) {
            subscribePassenger();
            setDataPassenger(searchData.Passenger);
        }
        if(searchError || subsError){
            console.log("error when search:" + searchError);
            console.log("error when get data:" + subsError);
            return null;
        }
    }, [searchData, searchError, subsError])

    //event handling
    const handleSearchId = (e) => {
        getPassengerById({
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
        editPassenger({
            variables:{
                id: editUser.id,
                nama: editUser.nama,
                jk: editUser.jk,
                umur: editUser.umur,
            }
        })
    }

    if(searchLoading || subsLoading){
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
            {!subsError && !subsLoading && !searchLoading && (
                <ListPassenger
                    data={searchData ? searchData?.Passenger : subsData?.Passenger}
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