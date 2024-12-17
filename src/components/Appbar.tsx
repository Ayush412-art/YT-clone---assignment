import Searchbar from "./Searchbar";


export function Appbar() {
  return (
    <div className="flex justify-around py-3">
        <div >
            <img className="h-16 w-22" src="./Ytlogo.png" alt="YT logo"></img>
        </div>
        <div>
           <Searchbar />
        </div>
        <div>
            sign page
        </div>
      
    </div>
  )
}


