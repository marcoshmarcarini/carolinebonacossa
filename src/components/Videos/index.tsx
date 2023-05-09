import YoutubeIframePlayer from 'react-native-youtube-iframe-player';


export default function Videos(){
    
    return(
        <>
            <div id="player">
            <YoutubeIframePlayer
                videoUrl='https://www.youtube.com/shorts/QZLM2wOGsk0'
                height={210}
                width='100%'
                locale='km'
                durationFontSize={15}
            />
            </div>
        </>
        
    )
}