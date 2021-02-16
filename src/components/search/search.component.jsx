import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { setQuery } from '../../store/products/products.actions';
import { selectQuery } from '../../store/products/products.selectors';
import styles from './search.module.css'

const Search = ({ className }) => {
    const value = useSelector(selectQuery)

    const dispatch = useDispatch()
    const handleChange = (event) => {
        const value = event.target.value
        dispatch(setQuery(value))
    }

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <input type="text" placeholder="Поиск" className={styles.input} value={value} onChange={handleChange} />
            <SearchIcon className={styles.icon} />
        </div>
    )
}

export default Search
