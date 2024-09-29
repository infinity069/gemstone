const filterBtns = document.querySelectorAll('.btn')
const storeProducts = document.querySelectorAll('.product')

for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', (e)=> {
        const filter = e.target.dataset.filter
        // console.log(filter);
        storeProducts.forEach(product => {
            if (filter == "all") {
                product.style.display = "block"
            } else if (product.classList.contains(filter)) {
                product.style.display = "block"
            } else {
                product.style.display = "none"
            }
        })
    })   
}
// filter search

const search = document.querySelector('.search')
search.addEventListener('keyup', (e) => {
    e.preventDefault()
    const searchValue = search.value.toLowerCase().trim();
    
    for (let i = 0; i < storeProducts.length; i++) {
        if (storeProducts[i].classList.contains(searchValue)) {
            storeProducts[i].style.display = 'block'
        } else {
            storeProducts[i].style.display = 'none   '
        }
        
    }
})