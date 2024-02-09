document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://picsum.photos'
    const photoWidth = 600
    const photoHeight = 400
    const grayscale = true
    const blur = 2


    fetch(`${url}/${photoWidth}/${photoHeight}/?${grayscale ? 'grayscale&' : ''}${blur ? 'blur=' + blur : ''}`)
    .then(resp => {
        const imgUrl = resp['url']
        const randomPhoto = document.querySelector('#display-photo')

        randomPhoto.src = imgUrl
        console.log(resp)


        
    })
    
})

