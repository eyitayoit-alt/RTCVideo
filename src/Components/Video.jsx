// eslint-disable-next-line react/prop-types
function Video({vref}){

    return(
        <video ref={vref} width="400" height="400" autoPlay playsInline ></video>
    )
}

export default Video