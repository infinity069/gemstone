let roomHTML = document.querySelector('.fetchroom')
let roomList = []

fetch('rooms.json')
.then(resp => resp.json())
.then(data => {
    roomList = data
    displayRoom()
})

function displayRoom() {
    roomHTML.innerHTML = ''
    if (roomList.length > 0) {
        roomList.forEach(room => {
            let container = document.querySelector('.rooms')
            let newRoom = document.createElement('a')
            newRoom.href = '/detail.html?id=' + room.id
            newRoom.style.marginLeft= '30px'
            newRoom.style.color= 'white'
            newRoom.style.textDecoration= 'none'
            newRoom.classList.add('swiper-slide', 'room')
            newRoom.innerHTML= `<img src="${room.image}" alt="" />
            <div class="room-info">
              <h5> ${room.title}</h5>
              <i class="fa fa-arrow-right"></i>
            </div>`
            roomHTML.appendChild(newRoom)
            container.appendChild(roomHTML)
        })
    }
}
const closeMenu = document.querySelector('.fa-times')
const hambugerMenu = document.querySelector('.hamburger')
const sideMenu = document.querySelector('.side-menu')
closeMenu.addEventListener('click', ()=> {
    sideMenu.classList.remove('active')
})
hambugerMenu.addEventListener('click', ()=> {
    sideMenu.classList.add('active')
})