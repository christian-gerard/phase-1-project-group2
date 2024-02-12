document.addEventListener('DOMContentLoaded', () => {

    //Fetch variables
    const url = 'https://picsum.photos'
    const arrayUrl = 'https://picsum.photos/v2/list?limit=5'
    const photoWidth = 1200
    const photoHeight = 600
    let grayscale = false
    let blur = 0


    //DOM Elements
    const randomPhoto = document.querySelector('#display-photo')
    const photoMessage = document.querySelector('#photo-message')
    const blackAndWhite = document.querySelector('#toggle')
    const blurInput = document.querySelector('#blur-input');
    const photoPreview = document.querySelector('#photo-preview')


    const renderPhoto = () => {

    
    }

    blurInput.addEventListener('input', (event) => {
        const inputBlurValue = parseInt(event.target.value, 10);

       
    });

    blackAndWhite.addEventListener('change', (event) => {
        const btn = event.target.checked
        if (btn) {
            grayscale = true
        } else {
            grayscale = false
        }
        console.log(grayscale)
        fetchPhoto()

    });

   
    const fetchPhotoArray = () => {

        fetch(arrayUrl)
        .then(resp => resp.json())
        .then(photos => {
            photos.map((photo) => {
                const previewImg = document.createElement('img')
                const newImgUrl = `${photo.download_url.slice(0,26)}/200`
                console.log(newImgUrl)

                previewImg.src = photo.newImgUrl
                photoPreview.appendChild(previewImg)
            })
        })

    }


    const fetchPhoto = () => {

        randomPhoto.src = ''
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

        fetchPhotoArray()
    }


    main()



})

