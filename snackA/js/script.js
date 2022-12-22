

const { createApp } = Vue


createApp({
    data() {
        return {
            messaggi: [],
            userMex: "",
           
        }
    },
    methods: {

        sendMessage(){
            if(this.userMex.length > 0){

                this.messaggi.push(
                    {
                        text: this.userMex,
                        value: "sent"
                    }
                );
                    
                this.userMex = "";
                
                setTimeout(() => {
                    this.getAnswer();
                }, 1 * 1000);
            }
        },


        getAnswer() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
                .then((response) => {
                   

                    this.messaggi.push({
                        text: response.data.response,
                        value: "received"
                    });

                })
        }


    },
    
}).mount("#app")
