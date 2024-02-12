document.addEventListener('DOMContentLoaded', () => {

    //Fetch variables
    const url = 'https://picsum.photos'
    let photoWidth = 1200
    let photoHeight = 600
    const createPhotoButton = document.getElementById('generate-button')

    let grayscale = false
    let blur = 0


    //DOM Elements
    const randomPhoto = document.querySelector('#display-photo')
    const photoMessage = document.querySelector('#photo-message')
    const blackAndWhite = document.querySelector('#toggle')
    const blurInput = document.getElementById('blur-input');

    const widthScale = document.getElementById('photo-width');
    const heightScale = document.getElementById('photo-height');



    const renderPhoto = () => {
        let blueValue = blueInput.value
    }

    blurInput.addEventListener('input', (event) => {
        let inputValue = event.target.value;
        blur = parseInt(inputValue);

        fetchPhoto()
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


    createPhotoButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e)
        fetchPhoto()
    })


    heightScale.addEventListener('input', (event) => {
        const newHeight = parseInt(event.target.value);
        photoHeight = newHeight;
        fetchPhoto();
    });


    widthScale.addEventListener('input', (event) => {
        const newWidth = parseInt(event.target.value);
        photoWidth = newWidth;
        fetchPhoto();
    });

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

