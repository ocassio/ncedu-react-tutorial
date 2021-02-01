import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import styles from './search.module.css'

const Search = ({ className }) => {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <input type="text" placeholder="Поиск" className={styles.input} />
            <SearchIcon className={styles.icon} />
        </div>
    )
}

export default Search
