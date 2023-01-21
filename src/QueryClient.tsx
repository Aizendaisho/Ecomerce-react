import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const client = new QueryClient()

interface Children {
    children: ReactNode
}


const QueryClientProvider = ({children}: {children: ReactNode}) => {
    return <QueryClientProvider client={client}> {children}</QueryClientProvider>
}