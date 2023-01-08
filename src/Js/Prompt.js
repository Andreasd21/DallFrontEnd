import axios from "axios";

export const postPrompt = async(promptText,userId) => {
    console.log(promptText,userId)
    await axios.post(`${import.meta.env.VITE_API_ENDPOINT}api/Requests`, {
        DallUserId: userId,
        status: 'pending',
        prompt: promptText

    }).then((res)=>{
        console.log(res)
    })
}