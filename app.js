const app = Vue.createApp({
    data() {
        return {
            datas: [
                {
                    title: "The final chapter",
                    author: "Brandor mark",
                    age: 34,
                    isFav: false,
                },
                {
                    title: "The load of the ring",
                    author: "Brandor rk",
                    age: 43,
                    isFav: true,
                },
                {
                    title: "The final",
                    author: "Brandor",
                    age: 30,
                    isFav: true,
                }
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = "The load of the ring";
        },
        changeFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filterBook() {
            return this.datas.filter(v => v.isFav);
        }
    }
});
app.mount("#app");