import Search from './Search';
import ButtonLightDark from './ButtonLightDark';

const Header = () => {

    return (
        <header  className="bg-my-blue-900 h-56 flex items-center justify-center relative mb-10 dark:bg-my-black-800">

            <ButtonLightDark />

            <div className="">
                <img src={"/logo.svg"} className="h-[34px]" />
            </div>
            
            <Search />
        </header>
    );
}


export default Header;