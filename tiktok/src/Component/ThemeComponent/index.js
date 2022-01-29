import Content from './Content.js'
import {useContext} from 'react'
import {ThemeContext,ThemeProvider} from '../../ThemeContext'
function Theme(){
    const context = useContext(ThemeContext)
    return (
            <div>
                <button onClick={context.toggleTheme}>Change Theme</button>
                <Content/>
            </div>    
    )
}

export default Theme