import { VolumeInput } from './styled'

export const MusicVolume = () => {
    return (
        <VolumeInput type='range' min={0} max={100} defaultValue={50} />
    )
}