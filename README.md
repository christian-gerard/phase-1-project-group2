
## FotoForge
### Create and Save beautiful images

## Table of Contents 
1. Introduction
2. Features
4. Installation
5. How to Use
6. API
7. License
8. Acknowledgements

##  Introduction

Whether you're seeking inspiration or simply enjoying the creative process, Foto Forge provides a user-friendly platform for exploring, interacting, and tailoring images to your unique vision. Unleash your creativity and enhance the aesthetic appeal of your photos with just a few clicks.

Get ready to embark on a journey of visual exploration and customization, turning ordinary photos into personalized works of art. Let your imagination run wild on the Photo Customizer Website!



## Features

- The application provides a preview bar of additional images for selection.
- Randomly generated photos for interactive customization.
- Adjust height and width of the photos.
- Apply blur effect for visual aesthetics.
- Convert photos to black and white for a classic look.
- Save your favorite photos under 'My Photos'
- Edit saved photos
- Delete unwanted saved photos
## Installation
FotoForge must be downloaded and ran on your local device. Instructions to do so are included below...


### Open FotoForge

Navigate to the main repo of FotoForge. Navigate to the upper righthand side and click on Fork. Choose your preferred settings and confirm by clicking 'Create Fork'. Within your own forked repo click on 'Code' > 'Local' > 'SSH' > Copy the SSH link to your clipboard. 

Next, open up your terminal. Navigate to a folder where you would like to store FotoForge and run the following while replacing the values wrapped in <> with your own values 
<br><br>
`git clone <SSH Link>`
<br><br>
`cd <Repo Name>`
<br><br>
Feel free to open up your code in your preferred code editor at this time. If you already have node.js downloaded continue to the next step. Otherwise, download Node here (https://nodejs.org/en/download). 
<br><br>
Start a live server on your device
<br><br>
`npm install -g live-server`
<br><br>
`live-server .`
<br><br>
You are now able to use FotoForge. You will be able to view and edit photos at this time. In order to save your photos please continue with the instructions below.

### Setting up your local server

In order to store your beautiful creations you will need to open up your own JSON server on your device. Follow the instructions below...
<br><br>
 `npm install json-server`
 <br><br>
`json-server --watch ./src/db.json`
 <br><br>
 You can now save your edited photos to view later. Enjoy!!!


## How to Use


## License 
This project is licensed under the MIT License

## Acknowledgments
-  Thanks to Unsplash for providing the random photos.
- Special thanks to our contributors for their valuable input and contributions.

## Badges???
