import { act, createContext, useContext, useState } from "react";

type SidebarContextType = {
    onChange: (item: string) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
    const [selected, setSelected] = useState("");

    const onChange = (item: string) => {
        setSelected(item);
    };
    console.log(selected);
    return (
        <SidebarContext.Provider value={{ onChange }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }

    return context;
}


