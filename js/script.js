var helloWorld = new Vue(
    {
        el: '#title',
        data: {
            titleText: 'Hello World!',
            paragraphText: "L' immagine non è mai la stessa!"
        },
    }
);

var mainContainer = new Vue (
    {
        el:'#container',
        data: {
            addImg: 'https://picsum.photos/600/300',
        },
    }
);