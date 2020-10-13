import { useEffect, useState } from "react"
import { getCriminals } from "../helpers/getCriminals";

export const useFetchCriminals = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getCriminals()
            .then(criminales => {
                setState({
                    data: criminales,
                    loading: false
                })
            })
    }, []);

    return state;
}