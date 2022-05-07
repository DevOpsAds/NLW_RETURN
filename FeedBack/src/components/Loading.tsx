import { CircleHalf } from "phosphor-react";

export function Loading(){
    return(
        <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
            <CircleHalf weight="bold" className="w-4 h-4 animate-spin 13s infinite"/>
            
        </div>
    )

}