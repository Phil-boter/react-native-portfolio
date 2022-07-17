import { useCallback, useEffect, useState } from "react";


export default function FetchError({error}) {
    
    const [errorState, setError] = useState(false);

    const validateError = useCallback(() => {
         error ? setError(true) : setError(false);
    }, [error]);

    useEffect(() => {
        validateError();
    }, [validateError]);
    
    return [errorState, setError];
}