

const { createApp } = Vue


createApp({
    data() {
        return {
            userInput: "",
            numbers: null,
            somma: 0,
        }
    },
    methods: {

        getRandomNumbers() {

            axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userInput}`)
                .then((response) => {
                    this.somma = 0;

                    this.numbers = response.data.response;
                    console.log(this.numbers);

                    this.numbers.forEach(number => {

                        this.somma = this.somma + number;

                    });


                })
        }


    },
    
}).mount("#app")
