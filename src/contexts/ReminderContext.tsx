import React, { createContext, ReactNode, useContext, useState } from "react";

interface Friend{
    id_friend : string;
    friend_name: string;
}

interface Lembrete{
    id: string;
    title: string;
    description: string;
    flag: "common" | "important" | "urgent";
    date?: string;
    friend?: Friend; 
}


interface LembreteContextProps{
    isModalOpen : boolean;
    openModal: ()=> void;
    closeModal: ()=>void;
    lembretes: Lembrete[];
    criarLembrete: (data: Omit<Lembrete,"id">)=>void;
}

const LembreteContext = createContext<LembreteContextProps | undefined>(undefined);

export function LembreteProvider({children}:{children:ReactNode}){

    const [isModalOpen,setIsModalOpen] = useState(false);
    const [lembretes,setLembretes] = useState<Lembrete[]>([]);

    const openModal = ()=> setIsModalOpen(true);
    const closeModal = ()=> setIsModalOpen(false);

    function criarLembrete(data:Omit<Lembrete,"id">){
        const novaTarefa = {
            id: Date.now().toString(),
            ...data,
        };

        setLembretes((oldReminders)=>[...oldReminders,novaTarefa]);
        closeModal();
    }

    return (
        <LembreteContext.Provider value={{
            isModalOpen,
            openModal,
            closeModal,
            lembretes,
            criarLembrete,
        }}>
            {children}
        </LembreteContext.Provider>
    );
}

export function useLembrete(){
    const context = useContext(LembreteContext);
    if(!context){
        throw new Error("useLembrete must be used within a LembreteProvider");
    }
    return context;
}








