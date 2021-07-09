import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SideMenu from './SideMenu';

export default function Nav(){

    const [scroll, setScroll] = useState(0); //dom이 랜더링을 할 때 사용하는 값을 고정적으로 지정해  값을 활용할 수 있게 해주는 것.
    //console.log(scroll);

    useEffect(()=>{ //
        //const header = document.querySelector(".sticky-bar");
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[]);

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    return(
        <div className={ 
            scroll ? "header-padding-1 sticky-bar header-res-padding clearfix stick" 
            : "header-padding-1 header-res-padding clearfix stick"
            }
        >
            <div className="container-fluid">
                <div className="row">
                    <Logo />
                    <Menu />
                    <SideMenu />
                </div>
            </div>
            
        </div>
    );
}