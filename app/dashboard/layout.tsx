import Header from "@/components/Header"
import { ClerkLoaded } from "@clerk/nextjs"


function DashboardLayout( { children }: { children: React.ReactNode}) {
  return (
    // adde ClerkLoaded
    <div className="flex-1 flex flex-col h-screen">
        <Header/>
        <main className="flex-1 overflow-y-auto"> 
        { children }
        </main>
    </div>
  )
}

export default DashboardLayout