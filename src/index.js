document.addEventListener('DOMContentLoaded', () => {

    //Fetch variables
    const url = 'https://picsum.photos'
    const arrayUrl = 'https://picsum.photos/v2/list?limit=5'
    const dbUrl = 'http://localhost:3000/photos'
    let grayscale = false
    let blur = 0
    let photoId = Math.floor(Math.random() * 700)
    let photoWidth = 1600
    let photoHeight = 1000
    
  



    //DOM Elements
    const randomPhoto = document.querySelector('#display-photo')
    const photoMessage = document.querySelector('#photo-message')
    const blackAndWhite = document.querySelector('#toggle')
    const createPhotoButton = document.getElementById('generate-button')
    const photoPreviewContainer = document.querySelector('#photo-preview')
    const photoPreviewBar = document.querySelector('#photo-preview-bar')
    const newImagesButton = document.querySelector('#new-images-button')
    const blurInput = document.getElementById('blur-input');
    const widthScale = document.getElementById('photo-width');
    const heightScale = document.getElementById('photo-height');
    const photoStorageContainer = document.querySelector('#photo-storage-container')
    const saveButton = document.querySelector('#save-button')
   




    //Event Listeners
    blurInput.addEventListener('input', (event) => {
        let inputValue = event.target.value;
        blur = parseInt(inputValue);


    });

    blackAndWhite.addEventListener('change', (event) => {
        const btn = event.target.checked
        if (btn) {
            grayscale = true
        } else {
            grayscale = false
        }
        console.log(grayscale)


    });

    createPhotoButton.addEventListener('click', (e) => {
        e.preventDefault();

        fetchPhoto();
    })

    heightScale.addEventListener('input', (event) => {
        const newHeight = parseInt(event.target.value);

        if(newHeight > 1000) {
            alert('Please Input a height below 1000px')
        } else {
            photoHeight = newHeight;
        }
        

    });
  
    widthScale.addEventListener('input', (event) => {
        const newWidth = parseInt(event.target.value);

        if(newWidth > 1600) {
            alert('Please Input a width below 1600px')
        } else {
            photoWidth = newWidth;
        }
        

    });

    newImagesButton.addEventListener('click', () => {

        fetchPhotoArray()
    })

    saveButton.addEventListener('click', () => savePhoto())

   //Function Declarations
    const fetchPhotoArray = () => {
        photoPreviewBar.innerHTML =''

        const randomPage = Math.floor(Math.random() * 100)



        fetch(`${arrayUrl}&page=${randomPage}`)
        .then(resp => resp.json())
        .then(photos => {
            photos.map((photo) => {


                const previewImg = document.createElement('img')
                const newImgUrl = `${photo.download_url.slice(0,25)}${photo.id}/200`



                previewImg.name = photo.id
                previewImg.src = newImgUrl
                previewImg.classList.add('photo-bar-img')

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
                
                
                const imgUrl = resp['url']

                hideLoading()
                randomPhoto.src = imgUrl

            })
            .catch(err => console.log(err))

    }

    const renderSavedPhotos = () => {

        fetch(dbUrl)
        .then(resp => resp.json())
        .then(savedPhotos => {

            savedPhotos.map((photo) => {
                //Declare new elements
                const newPhotoCard = document.createElement('div')
                const newButtonContainer = document.createElement('div')
                const newPhotoName = document.createElement('h3')
                const newPhotoSize = document.createElement('h5')
                const newBlurPreview = document.createElement('h5')
                const newGrayscale = document.createElement('h5')
                const newEditButton = document.createElement('button')
                const newDeleteButton = document.createElement('button')
                const newImgPreview = document.createElement('img')

                //Input Data into new elements
                newPhotoName.innerHTML = photo.name
                newPhotoSize.innerHTML = `Width: ${photo.width} Height: ${photo.height}`
                newGrayscale.innerHTML = `B&W: ${grayscale ? 'Yes' : 'No'}`
                newBlurPreview.innerHTML = `Blur: ${photo.blur}`
                newImgPreview.classList.add('photo-card-img')
                newImgPreview.src = `${url}/id/${photo.unsplashId}/600`
                newDeleteButton.classList.add('photo-card-button')
                newDeleteButton.innerHTML = 'X'
                newDeleteButton.name = photo.id
                newDeleteButton.addEventListener('click', (e) => deletePhoto(e))
                newEditButton.classList.add('photo-card-button')
                newEditButton.name = photo.id
                newEditButton.innerHTML = 'Edit'
                newEditButton.addEventListener('click', (e) => editPhoto(e))
                newButtonContainer.classList.add('saved-photo-buttons')

                //Add Elements to new Div
                newPhotoCard.classList.add('photo-card')
                newButtonContainer.append(newEditButton, newDeleteButton)
                newPhotoCard.append(newButtonContainer, newPhotoName, newPhotoSize, newBlurPreview, newGrayscale, newImgPreview)
                
                //Add new Photo Card to Saved Photos

                photoStorageContainer.append(newPhotoCard)

               


            })
        })
    }

    // KIA -> POST Request
    const savePhoto = () => {
        console.log('PHOTO SAVED')
    }


     // PEDRO -> PATCH Request
     const editPhoto = (e) => {
        const editUrl = `http://localhost:3000/photos/${e.target.name}`;
        console.log(editUrl)
        // Define the data to be updated
        const editData = {
          "height": 400
          "width": 400
        };
    
        fetch(editUrl, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editData)
        })
        .then(resp => {
            if (!resp.ok) {
             console.log("did not work")
            }
            console.log('EDIT SUCCESSFUL');
        })
        .catch(err => {
            console.error('Error:', err);
        });
    }
   


    // CHRISTIAN -> DELETE Request
    const deletePhoto = (e) => {
        console.log(e.target.name)
        const deleteUrl = `http://localhost:3000/photos/${e.target.name}`
        console.log(e)
        fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then( resp => {
            if(!resp.ok) {
                throw new Error('ERROR');
            }
            console.log('DELETE SUCCESSFUL')
        })
        .catch(err => {
            console.error('Error:', err)
        })


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
        renderSavedPhotos()
        
       

    }


    //Invoke functionality
    main()

})

