import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {
    const isMounted = useRef(true); // primera vez que esta montado
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, [])

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {

                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
                else {
                    console.log("SetState wasn't called")
                }
            })
            .catch( err => {
                setState({ data: null , loading: false , error: err});
            })




    }, [url]);

    return state;
}