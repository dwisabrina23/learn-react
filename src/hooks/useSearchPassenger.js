import {useLazyQuery} from "@apollo/client";
import { SearchById } from "../graphQL/Query";
import { SubsPassenger } from "../graphQL/Subscription";

function useSearchPassenger() {
    const [
        getPassengerById,
        {
        data: searchData, 
        loading: searchLoading, 
        error: searchError,
        susbcribeToMore,
    }] = useLazyQuery(SearchById);

    const subscribePassenger = () => {
        susbcribeToMore({
            document: SubsPassenger,
            updateQuery: (prev, {susbscriptionData: {searchData}}) =>{
                return searchData
            }
        })
    }
    return {getPassengerById, searchData, searchLoading, searchError, subscribePassenger}
}

export default useSearchPassenger;