import { CloseButton } from "../CloseButton";
import { useState } from "react";


import ideaimgem from '../../assets/idea.png'
import bugimgem from '../../assets/bug.png'
import balaoimgem from '../../assets/balao.png'

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugimgem,
            alt: 'imagem de uma barata'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaimgem,
            alt: 'imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: balaoimgem,
            alt: 'imagem de balão de pensamento'
        },
    },

}


export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent,setFeedbackSent]=useState(false);

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative flex rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent?(
            <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/> 
             ):(
                 <>
                             {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />

            ) :(
                <FeedbackContentStep
                 feedbackType={feedbackType}
                 onFeedbackRestartRequested={handleRestartFeedback}
                 onFeedbackSent={()=>setFeedbackSent(true)}
                 />
            )}
                 </>
             )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>

    )

}