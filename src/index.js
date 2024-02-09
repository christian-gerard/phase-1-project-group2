document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://picsum.photos'
    const photoWidth = 1200
    const photoHeight = 600
    const grayscale = false
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
        .catch(err => console.log(err))

    }

    const displayLoading = () => {
        photoMessage.classList.add('display')

       
        
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

