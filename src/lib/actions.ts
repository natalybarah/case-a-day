

export async function addLike(case){
    'use server'
    //ya va a recibir el caso individual
    if (toggle){
        const increase= {...case, likes: 297 + 1}
        setIncrease(prev=> increase)
    } else {
        const decrease={...case, likes: 297 + 1}
        setDecrease(prev=> decrease)
    }
    
}

//digamos que recibe un array [{}, {uuid: 45, likes:297}]

