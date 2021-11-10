var helloWorld = new Vue(
    {
        el: '#title',
        data: {
            titleText: 'Hello World!',
            paragraphText: "L' immagine non è mai la stessa!",
            addImg: 'https://picsum.photos/600/300'
        },
        methods: {
            changeImg: function() {
                window.location.reload();
            }
        }
    },
);