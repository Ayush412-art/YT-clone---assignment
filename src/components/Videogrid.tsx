import VideoCards from "./VideoCards"


const Videos = [
    {
        img : "./srk_img.jpg" ,
        logo : './logo.jpg',
        title : 'Sharukh khan | Bollywood actor | Actor ' ,
        views : "20M views" ,
        timestamps : "20min",
         channel : 'Srk Tv' ,
         progress : 20
    },
    {
        img : "./srk_img.jpg" ,
        logo : './logo.jpg',
        title : 'Sharukh khan | Bollywood actor | Actor ' ,
        views : "20M views" ,
        timestamps : "20min",
         channel : 'Srk Tv' ,
         progress : 37
    },
    {
        img : "./srk_img.jpg" ,
        logo : './logo.jpg',
        title : 'Sharukh khan | Bollywood actor | Actor ' ,
        views : "20M views" ,
        timestamps : "20min",
         channel : 'Srk Tv' ,
         progress : 50
    },
    {
        img : "./srk_img.jpg" ,
        logo : './logo.jpg',
        title : 'Sharukh khan | Bollywood actor | Actor ' ,
        views : "20M views" ,
        timestamps : "20min",
         channel : 'Srk Tv' ,
         progress : 80
    }
]
function Videogrid() {


  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
    {
        Videos.map(video => (
            
                <VideoCards title = {video.title} 
                img = {video.img}
                 logo = {video.logo}
                  views = {video.views} 
                  channel = {video.channel} 
                  timestamps = {video.timestamps}
                  progress = {video.progress}
                  />
                  
        ))
    }
    </div>
    </>
  )
}

export default Videogrid
