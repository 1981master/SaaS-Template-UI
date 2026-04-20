import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/slice/themeSlice'

export default function DarkModeToggle() {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.mode)

    return (
        <button
            className="dark-mode-toggle"
            onClick={() => dispatch(toggleTheme())}
        >
            <span className={`switch-track ${theme === 'dark' ? 'on' : 'off'}`}>
                <span className="switch-thumb" />
            </span>
        </button>
    )
}
