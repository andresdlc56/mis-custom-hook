import { useEffect, useRef, useState } from "react"

// CUSTOM HOOK QUE SE ENCARGA DE TRAER QUOTES DE LA API DE "THE BREAKING BAD"
export const useFetch = (url) => {

    // MANTENDRA LA REFERENCIA CUANDO ESTE COMPONENTE ESTE MONTADO
    const isMounted = useRef(true);
    
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    // EFECTO QUE SE VA A DISPARAR CUANDO EL COMPONENTE ES RENDERIZADO
    useEffect(() => {

        // NO VA A HACER NADA

        // CUANDO SE DESMONTE ES COMPONENTE VA A CAMBIAR EL VALOR DE MI REF A FALSE
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setstate({ data: null, loading: true, error: null });
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                // SI LA REF "isMounted" ES TRUE CAMBIA EL STATE
                if(isMounted.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                } else{
                    console.log('setState no se llamo');
                }
            })
            .catch(() => {
                setstate({
                    data: null,
                    loading: false,
                    error: 'No se puede cargar la info'
                });
            })
    }, [url]);

    return state;
}
