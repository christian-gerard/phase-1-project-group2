document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://picsum.photos'
<<<<<<< HEAD
    const photoWidth = 500
    const photoHeight = 500
=======
    const photoWidth = 800
    const photoHeight = 1200
>>>>>>> 1dbcc208672a6345c987b4cbfd227012c1974b5e
    const grayscale = true
    const blur = 0

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

