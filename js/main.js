function test() {
    console.log(test);

}


function getImages() {
    const gallery = [
        {
            urlImage: 'girl-with-a-pearl-earring',
            title: 'Girl with a Pearl Earring',
            artist: 'Johannes Vermeer',
            description: 'A masterpiece of Dutch painting, often referred to as the "Mona Lisa of the North".'
        },
        {
            urlImage: 'mona-lisa',
            title: 'Mona Lisa',
            artist: 'Leonardo da Vinci',
            description: 'One of the most famous paintings in the world, known for its mysterious smile.'
        },
        {
            urlImage: 'starry-night',
            title: 'Starry Night',
            artist: 'Vincent van Gogh',
            description: 'A vibrant depiction of Van Gogh’s view from his asylum room, painted with swirling stars.'
        },
        {
            urlImage: 'the-persistence-of-memory',
            title: 'The Persistence of Memory',
            artist: 'Salvador Dalí',
            description: 'Known for its melting clocks, this surrealist painting symbolizes the fluidity of time.'
        },
        {
            urlImage: 'the-scream',
            title: 'The Scream',
            artist: 'Edvard Munch',
            description: 'A powerful expression of human anxiety and despair, iconic in modern art.'
        },
        {
            urlImage: 'guernica',
            title: 'Guernica',
            artist: 'Pablo Picasso',
            description: 'A political protest against the bombing of Guernica, filled with symbolic anguish.'
        },
        {
            urlImage: 'the-birth-of-venus',
            title: 'The Birth of Venus',
            artist: 'Sandro Botticelli',
            description: 'Depicts the Roman goddess Venus emerging from the sea, symbolizing beauty and love.'
        },
        {
            urlImage: 'american-gothic',
            title: 'American Gothic',
            artist: 'Grant Wood',
            description: 'A representation of rural American life, showing a stern farmer and his daughter.'
        },
        {
            urlImage: 'the-kiss',
            title: 'The Kiss',
            artist: 'Gustav Klimt',
            description: 'An iconic symbol of love, filled with intricate patterns and golden hues.'
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');

    gallery.forEach(painting => {
        const paintingHTML = `
            <div class="col-lg-4 py-3 col-md-6">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front rounded-5" style="background-image: url(./public/assets/img/${painting.urlImage}.jpg);">
                        </div>
                        <div class="flip-card-back rounded-5">
                            <div class="text-center px-2">
                                <h1>${painting.title}</h1>
                                <p>${painting.artist}</p>
                                <p>${painting.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Insertar el HTML uno por uno en el contenedor
        galleryContainer.innerHTML += paintingHTML;
    });
}

getImages()