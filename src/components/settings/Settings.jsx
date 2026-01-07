import { useState } from 'react';
import './settings.scss';


export default function Settings(){
    const [themeFlag, setthemeFlag] = useState(false);
    return(
        <div id='settings-container' className='container'>
              <div id='theme-container'>
              <span>Theme</span>
              <div id='theme-toggler'>
              <button onClick={()=>themeFlag? setthemeFlag(false) : setthemeFlag(true)}>Light</button>
              <div className={`${themeFlag ? 'theme-mode' : 'theme-visibility'}`}>
                <ul>
                    <li>Light</li>
                    <li>Dark</li>
                </ul>
                </div>
                </div>
</div>
        </div>
    )
}