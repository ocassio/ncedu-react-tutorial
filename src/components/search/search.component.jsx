import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import styles from './search.module.css'

const Search = ({ className, onChange }) => {
    const handleChange = (event) => {
        const value = event.target.value
        onChange(value)
    }

    return (
        <div className={`${styles.wrapper} ${className}`}>
            <input type="text" placeholder="Поиск" className={styles.input} onChange={handleChange} />
            <SearchIcon className={styles.icon} />
        </div>
    )
}

export default Search
