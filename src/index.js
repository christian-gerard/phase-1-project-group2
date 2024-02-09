document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://picsum.photos'
    const photoWidth = 600
    const photoHeight = 800
    const grayscale = true
    const blur = 5

    const randomPhoto = document.querySelector('#display-photo')
    const photoMessage = document.querySelector('#photo-message')



    const fetchPhoto = () => {
        
        displayLoading()

        fetch(`${url}/${photoWidth}/${photoHeight}/?${grayscale ? 'grayscale&' : ''}${blur ? 'blur=' + blur : ''}`)
        .then(resp => {
            const imgUrl = resp['url']
            
            hideLoading()
            randomPhoto.src = imgUrl
            
        })

    }

    const displayLoading = () => {
        photoMessage.classList.add('display')

        setTimeout( () => {
            photoMessage.innerHTML = 'This is taking a while....Please Refresh'
        }, 8000)
        
    }

    const hideLoading = () => {

        photoMessage.classList.remove('display')
    }

    const main = () => {
        //Get the photo from lorem picsum
        fetchPhoto()


    }


    main()
    













})

