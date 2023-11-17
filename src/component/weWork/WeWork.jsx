import React from 'react'
import './weWork.css'
function WeWork({ toolsImage, toolsImageText }){
    return(
        <div className="messageBird__weWork">
            <div className="messageBird__weWork-container">
                <div className="messageBird__wework-container_image">
                    <img src={toolsImage} alt="" />
                </div>
                <p>{toolsImageText}</p>
            </div>
        </div>
    )
}

export default WeWork