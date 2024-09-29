let room = null
fetch('rooms.json')
.then(response => response.json())
.then(data => {
    room = data
    showsDetails()
})

function showsDetails() {
    let detail = document.querySelector(".details")
    let productId = new URLSearchParams(window.location.search).get("id")
    let thisRoom = room.filter(value => {
        return value.id == productId
    })[0]

    detail.querySelector('.detail-img img').src = thisRoom.image
    function showrand() {
       for( let i = 0; i < 4; i++) {
        const randimgs = Math.floor(Math.random()* room.length)
       }
    }
}
