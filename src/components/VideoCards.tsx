
import Line from "./Line"
function VideoCards(props : any) {
  return (
    <div className="m-4 cursor-pointer">
      <div>
      <img className="rounded-lg w-full" src = {props.img} alt="image" ></img>
      <Line progress={props.progress} />
      </div>

      <div className="grid grid-cols-12 ">
 
        <div className="col-span-2 flex justify-center ">
        <img className="rounded-full h-10 w-10"  src = {props.logo} alt="image" ></img>
        </div>

        <div className="col-span-10 pl-4 font-semibold">
           {props.title}
        <div className="col-span-10 text-gray-400 text-sm" >
           {props.channel}
        </div>
        <div  className="col-span-10 text-gray-400 text-sm" >
           {props.views} | {props.timestamps}
        </div>
        </div>

      </div>
    </div>
 
  )
}

export default VideoCards
