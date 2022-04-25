import React, { HTMLInputTypeAttribute, useState } from 'react'
import { ProgressBody, PregressBar } from './styled'

export const ProgressBar = () => {
    //const [currentProgress, setCurrentProgress] = useState<number>(0)
    function handleChangeProgress(event:React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value)
    }

    return(
        <ProgressBody>
            <PregressBar type={'range'} min='0' max='100' onChange={handleChangeProgress}/>
        </ProgressBody>
    )
}