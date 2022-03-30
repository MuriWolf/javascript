// In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

// name: A string representing the band name.
// nationality: A string representing the country the band comes from.
// genre: What type of music the band plays.
// members: A number representing the number of members the band has.
// formed: A number representing the year the band formed.
// split: A number representing the year the band split up, or false if they are still together.
// albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
// name: A string representing the name of the album.
// released: A number representing the year the album was released.
// Include at least two albums in the albums array.

// Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

let band = {
    name: "Avanged Sevenfold",
    nationality: "United States of America",
    genre: "metal",
    members: 4,
    formed: "1999",
    split: false,
    albuns: {
        a0: {name: "Sounding the Seventh Trumpet", released: 2002},
        a1: {name: "Waking the Fallen", released: 2003},
        a2: {name: "City of Evil", released: 2005},
        a3: {name: "Self-Title", released: 2007},
        a4: {name: "Nightmare", released: 2009},
        a5: {name: "Hail to the King", released: 2013},
        a6: {name: "The Stage", released: 2016},
    },
    bandInfo: function() {
        return `The band ${this.name} is from ${this.nationality}, they are in active since ${this.formed}, the genre of this band is ${this.genre} and their first album released was "${this.albuns.a0.name}" in ${this.albuns.a0.released}.`
    },
}

bandInfo = band.bandInfo()

let para1 = document.createElement('p');
para1.textContent = bandInfo
document.body.appendChild(para1);