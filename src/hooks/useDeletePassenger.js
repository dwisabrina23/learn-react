import {useMutation} from "@apollo/client";
import { DeletePassenger } from "../graphQL/Mutation";

function useDeletePassenger() {
    const [
        deletePassenger,
        {loading: delLoading, }
    ]= useMutation(DeletePassenger);
    return {deletePassenger, delLoading}
}

export default useDeletePassenger;