import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { FaDesktop } from 'react-icons/fa';

const ButtonLightDark = () => {

    const [theme, setTheme] = React.useState<'dark'|'light'>('light');
    const [iconActive, setIconActive] = React.useState<string>(window.localStorage.getItem('theme') || 'system')
    const [themeSystem, setThemeStystem] = React.useState('');

    const statusThemeDark = window.matchMedia('(prefers-color-scheme: dark)')

    statusThemeDark.addEventListener('change', handleThemeSystem)

    function handleThemeSystem(){

        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        if(isDark){
            window.document.documentElement.classList.add('dark')
            setIconActive('system')
            setThemeStystem('dark')
        }

        if(isLight){
            window.document.documentElement.classList.remove('dark')
            setIconActive('system')
            setThemeStystem('light')
        }

        window.localStorage.removeItem('theme')
        
    }

    React.useEffect(() => {

        if(iconActive == 'system')
            handleThemeSystem()
        
    }, [])


    React.useEffect(() => {

        if(iconActive ==  'dark') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
            window.document.documentElement.classList.add('dark')
        }

        if(iconActive ==  'light') {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
            window.document.documentElement.classList.remove('dark')
        }

        if(iconActive ==  'system') {
            handleThemeSystem()
        }


    }, [iconActive])

    return (
        <div className="absolute top-3 right-3 bg-white h-10 rounded-md p-4 flex items-center justify-center gap-x-4 text-zinc-600 dark:bg-zinc-800">

            <div onClick={() => setIconActive('light')} className={twMerge(iconActive === 'light' && 'text-my-blue-900')}>
                <Sun size={20} className='cursor-pointer'/>
            </div>

            <div onClick={() => setIconActive('dark')} className={twMerge(iconActive === 'dark' && 'text-my-blue-900')}>
                <Moon size={20} className='cursor-pointer'/>
            </div>

            <div onClick={() => setIconActive('system')} className={twMerge(iconActive === 'system' && 'text-my-blue-900')}>
                <FaDesktop size={20} className='cursor-pointer'/>
            </div>

        </div>
    );

}


export default ButtonLightDark;