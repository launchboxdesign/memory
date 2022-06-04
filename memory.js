const cardArray = [
    {
        name: 'Arya',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-arya-stark.png',
    },
    {
        name: 'Ned',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-ned-stark.png',
    },
    {
        name: 'Jon',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-jon-snow.png',
    },
    {
        name: 'Cersei',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-cersei-lannister.png',
    },
    {
        name: 'Jamie',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-jamie-lannister.png',
    },
    {
        name: 'Tyrion',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-tyrion-lannister.png',
    },
    {
        name: 'Varys',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-lord-varys.png',
    },
    {
        name: 'Littlefinger',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-petyr-baelish.png',
    },
    {
        name: 'Joffrey',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-joffrey-baratheon.png',
    },
    {
        name: 'Daenerys',
        img: 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/game-of-thrones-cartoon-daenerys-targaryen-khaleesi.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'https://raw.githubusercontent.com/launchboxdesign/memory/main/images/GoT.jpg')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)

    }
}
createBoard()