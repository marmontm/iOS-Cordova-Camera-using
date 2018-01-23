// Camera feature: Take picture
function cameraTakePicture() {
    // try to take picture
    navigator.camera.getPicture(onSuccess, onFail, {
                                quality: 50,
                                destinationType: Camera.DestinationType.DATA_URL
                                });
    
    function onSuccess(imageData) {
        // hide error message (if displayed)
        var error = document.getElementById('errorinfo');
        error.style.display = "none";
        
        // display image
        var image = document.getElementById('imgSelected');
        image.src = "data:image/jpeg;base64," + imageData;
        image.style.display = "block";
    }
    
    function onFail(message) {
        // display error message
        var error = document.getElementById('errorinfo');
        error.style.display = "block";
        error.innerHTML = message;
    }
}

// Camera feature: Import picture
function cameraImportPicture() {
    // try to get image from photo library
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                destinationType: Camera.DestinationType.FILE_URI,
                                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
                                });
    
    function onSuccess(imageURL) {
        // hide error message (if displayed)
        var error = document.getElementById('errorinfo');
        error.style.display = "none";
        
        // display image
        var image = document.getElementById('imgSelected');
        image.src = imageURL;
        image.style.display = "block";
    }
    
    function onFail(message) {
        // display error message
        var error = document.getElementById('errorinfo');
        error.style.display = "block";
        error.innerHTML = message;
    }
    
}
