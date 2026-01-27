

import Link from "next/link"

export default function Layout({ auth, children,}: {auth: React.ReactNode, children: React.ReactNode}){
    return(
        <>
            <nav>
                <Link href="/signin">Open Modal</Link>
            </nav>
            <div>{auth}</div>
            <div>{children}</div>
        </>
    )
}
