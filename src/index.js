document.addEventListener('DOMContentLoaded', () => {

    //Fetch variables
    const url = 'https://picsum.photos'
    let photoWidth = 1200
    let photoHeight = 600
    

    let grayscale = false
    let  blur = 0


    //DOM Elements
    const randomPhoto = document.querySelector('#display-photo')
    const photoMessage = document.querySelector('#photo-message')
    const blackAndWhite = document.querySelector('#toggle')
    const blurInput = document.getElementById('blur-input');
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


    heightScale.addEventListener('input', (event) => {
      const newhHeight = parseInt(event.target.value);
      photoHeight = newHeight;
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

fetchPhoto()

})

