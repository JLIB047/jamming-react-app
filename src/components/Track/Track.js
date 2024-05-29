import React from 'react'; 

const Track = (props) => {
    const renderAction=()=> {
        if(props.isRemoval){
            return <button className='Track-action' onClick={passTrackToRemove}>
                -
            </button>
        } else {
            return <button className='Track-action' onClick={passTrack}>
                +
            </button>
        }
    };

    const passTrack = () => {
        props.onAdd(props.track); 
    };

    const passTrackToRemove = () => {
        props.onRemove(props.track)
    };

    return (
        <div className='Track'>
            <div className='Track-info'>
            {/* Track Name h3 */}
            <h3>{props.track.name}</h3>
            {/* Track artist / album p */}
            <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className='Track-action'>{renderAction()}</button>
        </div>
    )
}; 

export default Track; 