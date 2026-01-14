import Footer from "@/src/components/footer";


export default function footerLayout({children}: Readonly<{children: React.ReactNode;}>){
    return (

       
                <div className="mobile-shell">
                    <div className="overflow-y-auto flex-1 no-scrollbar">
                        {children}
                    </div>
                    <Footer/>
                </div>
     
    );

}