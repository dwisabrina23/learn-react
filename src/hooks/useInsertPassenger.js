import {useMutation} from "@apollo/client";
import { InsertPassenger } from "../graphQL/Mutation";

function useInsertPassenger(props) {
    const [
        insertPassenger,
        {loading: insLoading}
    ] = useMutation(InsertPassenger);
    return {insertPassenger, insLoading}
}

export default useInsertPassenger;