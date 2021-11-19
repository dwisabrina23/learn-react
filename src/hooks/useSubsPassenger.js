import {useSubscription} from "@apollo/client";
import { SubsPassenger } from "../graphQL/Subscription";

function useSubsPassenger(props) {
    const {
        data: subsData, 
        loading: subsLoading, 
        error: subsError,
    } = useSubscription(SubsPassenger);
    return {subsData, subsLoading, subsError}
}

export default useSubsPassenger;