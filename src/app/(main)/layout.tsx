import Footer from "@/src/components/footer";


export default function mainLayout({children}: Readonly<{children: React.ReactNode;}>){
    return (

        <html>
            <body>
                <div className="mobile-shell">
                    <div className="overflow-y-auto flex-1 no-scrollbar">
                        {children}
                    </div>
                </div>
                <Footer/>
            </body>
        </html>
    );

}