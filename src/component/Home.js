import React, {useEffect, useState} from "react";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {useQuery, useLazyQuery} from '@apollo/client'
import {GetAllPassanger, SearchById} from "../graphQL/Query";

function Home() {
    const {data: allData, loading: loadingAllData, error: errorAllData} = useQuery(GetAllPassanger);
    console.log(allData);
    const [getPassangerById, {data: dataId, loading: loadingDataId, errorId}] = useLazyQuery(SearchById);
    console.log("data id: " + dataId)

    //initialize state
    // const [dataPassenger, setDataPassenger] = useState([]);
    const [idPassenger, setIdPassenger] = useState(null)

    // const getAllData = () => {
    //     setDataPassenger(allData?.passanger);
    // }

    const handleSearchId = (e) => {
        getPassangerById({
            variables:{
                id: idPassenger,
            }
        })
    }

    const hapusPengunjung = id => {
        // this.setState({    
        //     data: [      
        //         ...this.state.data.filter(item => {        
        //             return item.id !== id;      
        //         })    
        //     ]  
        // });
    };
    
    const tambahPengunjung = newUser => {
        // const newData = {
        //     id: uuidv4(),
        //     ...newUser
        // }; 
        // this.setState({    
        //     data: [...this.state.data, newData]  
        // });
    };
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
                    data={dataId ? dataId?.passanger : allData?.passanger}
                    hapusPengunjung={hapusPengunjung}
                />
            )}
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
    )
}

export default Home;