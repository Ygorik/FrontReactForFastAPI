import React from 'react';
import cl from "./MyModal.module.css"

const MyModal = ({children, visible, setVisible, ...props}) => {
    let classNames = [cl.MyModalBG]
    
    if (visible){
        classNames.push(cl.activate)
    }else{
        classNames.push(cl.inactive)
    }

    return (
        <div className={classNames.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={cl.MyModal} onClick={(e) => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;
