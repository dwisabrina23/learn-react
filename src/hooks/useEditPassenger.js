import {useMutation} from "@apollo/client";
import { EditPassenger } from "../graphQL/Mutation";

function useEditPassenger() {
    const [
        editPassenger,
        {loading: editLoading, }
    ]= useMutation(EditPassenger);
    return {editPassenger, editLoading}
}

export default useEditPassenger;