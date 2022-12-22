

const { createApp } = Vue


createApp({
    data() {
        return {
            listaInvitati: [],
            i: 1,
            userInput: "",
        }
    },
    methods: {

        getName() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/name")
                .then((response) => {

                    this.listaInvitati.push(response.data.response);
                    console.log(response.data.response);
                })
        },
        check(){

            if(this.listaInvitati.includes(this.userInput)){
                return true;
            }else{
                return false;
            }

        }


    },
    created(){

        while(this.i <= 10){
            this.getName();
            this.i++;
        }


    }
}).mount("#app")
