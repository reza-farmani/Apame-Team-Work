import { useQuery } from "@tanstack/react-query";
import { getServices } from "../server/services/api";

function Order() {
    const {data: services, isLoading, error} = useQuery({
        queryKey: ['services'],
        queryFn: getServices,
    })
}

export default Order