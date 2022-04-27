import { ProgressBody, PregressBar } from './styled'

interface IProgressBar {
    currentSongProgress: number,
    songDuration: number
}

export const ProgressBar = ({currentSongProgress, songDuration}:IProgressBar) => {

    return(
        <ProgressBody>
            <PregressBar type='range' min={0} max={songDuration} value={currentSongProgress} />
        </ProgressBody>
    )
}