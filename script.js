const title = document.querySelector('.title')
const lleaf = document.querySelector('.lleaf')
const rleaf = document.querySelector('.rleaf')
const grass2 = document.querySelector('.grass2')
const grass1 = document.querySelector('.grass1')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function(){
    let value = window.scrollY
    //console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    lleaf.style.marginLeft = -value + 'px'
    rleaf.style.marginLeft = value + 'px'

    grass2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
    

})