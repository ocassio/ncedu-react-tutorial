import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQueryParams } from "./use-query-params.hook";

export function useQueryState(name, initialValue) {
    const [state, setState] = useState(initialValue)

    const query = useQueryParams()
    const value = query.get(name) || ''

    useEffect(() => {
        setState(value)
    }, [value])

    const history = useHistory()
    const setQuery = (value = '') => {
        setState(value)

        if (!value?.length) {
            query.delete(name)
        } else {
            query.set(name, value)
        }

        history.replace({
            search: query.toString()
        })
    }

    return [state, setQuery]
}