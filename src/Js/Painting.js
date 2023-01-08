import axios from "axios"

export const BuyPainting = async(userid,paintingid) =>{
    let boughtSucces = true
    if(await checkBought(userid,paintingid)){
        boughtSucces = false
        return
    }
    axios.post(`${import.meta.env.VITE_API_ENDPOINT}api/UserPaintings`,{
        paintingId:paintingid,
        userId:userid,
    }).then((res)=>{
        console.log(res)
    })
    return boughtSucces
}

async function checkBought (userid,paintingid){
    let bought = false;
    await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/UserPaintings`,userid).then((res)=>{
        for (let index = 0; index < res.data.length; index++) {
            const element = res.data[index];
            if(element.paintingId == paintingid){
                console.log('returning false')
                bought = true
            }
        }
        
    })
    return bought;
}