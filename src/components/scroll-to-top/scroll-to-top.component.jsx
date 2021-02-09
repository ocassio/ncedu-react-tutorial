import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const pathname = useLocation()
    const { action } = useHistory()

    useEffect(() => {
        if (action === 'PUSH') {
            window.scrollTo(0, 0)
        }
    }, [pathname, action])

    return null
}

export default ScrollToTop
