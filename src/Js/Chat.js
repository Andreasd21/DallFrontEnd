import { HubConnectionBuilder } from "@microsoft/signalr"

// import {createPost} from './MessageReceiver2';

export class ChatHub {
    constructor(){
        //signalr runnen met docker = http://localhost:8000/signalr
        this.connection = new HubConnectionBuilder().withUrl(`${import.meta.env.VITE_API_ENDPOINT}/signalr`).build()
        

        this.connection.onclose(async () => {
            await this.connect();
        })

        this.connect()

        this.connection.on("newCount", function (message) {
            //Here we have to input revieved message in correct chat

            sessionStorage.setItem('NewCount',message)
            window.dispatchEvent(NewCount)
        });

         const NewCount = new Event('NewCount')
    }

    async connect(){
        try {
            await this.connection.start();
            console.log("SignalR Connected.");
        } catch (err) {
            console.log(err);
        }  
    }
}