

const { createApp } = Vue


createApp({
    data() {
        return {
           
            numbersPari: [],
            numbersDispari: [],
        }
    },
    methods: {

        getRandomNumber() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/int")
                .then((response) => {
                    if (response.data.response % 2 == 0){

                        this.numbersPari.push(response.data.response);
                    }else{
                        this.numbersDispari.push(response.data.response);

                    }

                })
        }


    },
    
}).mount("#app")
