import { useEffect, useState } from "react"
import { getCriminals } from "../helpers/getCriminals";

export const useFetchCriminals = (country, minAge, maxAge, reqType) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getCriminals(country, minAge, maxAge, reqType)
            .then(criminales => {
                setState({
                    data: criminales,
                    loading: false
                })
            })
    }, [country, minAge, maxAge, reqType]);

    return state;
}