import Footer from "../../components/footer";
import { SignInContextProvider } from "@/src/context/sign-in-context";

export default function FooterLayout({children}: Readonly<{children: React.ReactNode;}>){
    return (
                <SignInContextProvider>
                <div className="mobile-shell flex flex-col flex-1 h-full w-full">
                    <div className="overflow-y-auto flex-1 no-scrollbar ">
                        {children}
                    </div>
                    <div className="shrink-0">
                        <Footer/>
                    </div>
                </div>
                </SignInContextProvider>
    );
}