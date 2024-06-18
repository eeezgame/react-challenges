import { useState } from "react";


export default function Picture() {

    const [isActive, setIsActive] = useState(false)
    let bgClassName = 'background'
    let pictureClassName = 'picture'

    if (isActive) {
        bgClassName += ' background--active'
    } else {
        pictureClassName += ' picture--active'
    }

    return (
        <div className={bgClassName} onClick={()=> setIsActive(false)}>
            <img
                className={pictureClassName}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
                onClick={(e)=>{
                    e.stopPropagation()
                    setIsActive(true)
                }}
            />
        </div>
    );
}