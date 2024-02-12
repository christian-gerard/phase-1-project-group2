document.addEventListener('DOMContentLoaded', () => {

    //Fetch variables
    const url = 'https://picsum.photos'
    const arrayUrl = 'https://picsum.photos/v2/list?limit=5'
    const photoWidth = 1200
    const photoHeight = 600
    let grayscale = false
    let blur = 0
    let photoId = Math.floor(Math.random() * 700)


    //DOM Elements
    const randomPhoto = document.querySelector('#display-photo')
    const photoMessage = document.querySelector('#photo-message')
    const blackAndWhite = document.querySelector('#toggle')
    const blurInput = document.querySelector('#blur-input');
    const photoPreviewContainer = document.querySelector('#photo-preview')
    const photoPreviewBar = document.querySelector('#photo-preview-bar')
    const newImagesButton = document.querySelector('#new-images-button')


    const renderPhoto = () => {

    
    }

    //Event Listeners
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

    newImagesButton.addEventListener('click', () => {

        fetchPhotoArray()
    })

   //Function Declarations
    const fetchPhotoArray = () => {
        photoPreviewBar.innerHTML =''

        const randomPage = Math.floor(Math.random() * 100)

        console.log(randomPage)

        fetch(`${arrayUrl}&page=${randomPage}`)
        .then(resp => resp.json())
        .then(photos => {
            photos.map((photo) => {


                const previewImg = document.createElement('img')
                const newImgUrl = `${photo.download_url.slice(0,25)}${photo.id}/200`



                previewImg.name = photo.id
                previewImg.src = newImgUrl
                console.log(previewImg)

                previewImg.addEventListener('click', (e) => {
                    photoId = e.target.name
                    fetchPhoto()
                    console.log(e.target.name)
                })
                photoPreviewBar.appendChild(previewImg)
            })
        })

    }


    const fetchPhoto = () => {

        randomPhoto.src = ''
        displayLoading()
        
        fetch(`${url}/id/${photoId}/${photoWidth}/${photoHeight}/?${grayscale ? 'grayscale&' : ''}${blur ? 'blur=' + blur : ''}`)
            .then(resp => {
                
                console.log(`${url}/id/${photoId}/${photoWidth}/${photoHeight}/?${grayscale ? 'grayscale&' : ''}${blur ? 'blur=' + blur : ''}`)
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

        fetchPhotoArray()
        fetchPhoto()

        
    }


    //Invoke functionality
    main()

})

