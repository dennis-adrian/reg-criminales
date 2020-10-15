import { useEffect, useState } from "react"
import { getCriminals } from "../helpers/getCriminals";

export const useFetchCriminals = (country, minAge, maxAge, reqType = 1) => {
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
    }, []);

    return state;
}