'use client'

import { createPortal } from "react-dom";

type PortalProps={
    children: React.ReactNode
}

const Portal=({children}: PortalProps)=>{


    const portalRoot= document.getElementById("portal");
    if (!portalRoot) return null;

    return createPortal(children, portalRoot)
      
}

export default Portal;

