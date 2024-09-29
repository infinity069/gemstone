let room = null
fetch('rooms.json')
.then(response => response.json())
.then(data => {
    room = data
    showsDetails()
})

function showsDetails() {
    let detail = document.querySelector(".detailing")
    let productId = new URLSearchParams(window.location.search).get("id")
    let thisRoom = room.filter(value => {
        return value.id == productId
    })[0]


    detail.querySelector('.detailing-img img').src = thisRoom.image
   
}
