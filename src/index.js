document.addEventListener('DOMContentLoaded', () => {

    const url = 'https://picsum.photos'
    const photoWidth = 500
    const photoHeight = 500
    const grayscale = true
    const blur = 5

    const randomPhoto = document.querySelector('#display-photo')
    const photoContainer = 'Select parent Div of the random image once this code has been merged'



    const fetchPhoto = () => {
        
        displayLoading(randomPhoto)

        fetch(`${url}/${photoWidth}/${photoHeight}/?${grayscale ? 'grayscale&' : ''}${blur ? 'blur=' + blur : ''}`)
        .then(resp => {
            const imgUrl = resp['url']
            
            hideLoading()
            randomPhoto.src = imgUrl
            
        })

    }

    const displayLoading = (element) => {
        console.log('Display Loading')
        element.alt = 'random-photo'
    }

    const hideLoading = () => {

        console.log('Hide Loading')
    }

    const main = () => {
        //Get the photo from lorem picsum
        fetchPhoto()


    }


    main()
    













})

