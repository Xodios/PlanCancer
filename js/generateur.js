const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('.header');
let file;
const body = document.getElementsByTagName('html');
const button = document.querySelector('.button');
const input = document.querySelector('input');

/* BEGIN for impoter button*/
button.addEventListener('click', () => {
    input.click();
});

input.addEventListener('change', function () {
    file = this.files[0];
    dragArea.classList.add('active');
    displayFile(file);
});
/*END for importer button */


body[0].addEventListener('dragover', (event) => {
    event.preventDefault();
});

body[0].addEventListener('drop', (event) => {
    event.preventDefault();
});


dragArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragText.textContent = 'Déposer pour importer';
    dragArea.classList.add('active');
});

dragArea.addEventListener('dragleave', () => {
    dragText.textContent = 'Glisser et déposer';
    dragArea.classList.remove('active');
});

dragArea.addEventListener('drop', (event) => {
    event.preventDefault();

    file = event.dataTransfer.files[0];
    displayFile(file);
});

function displayFile(file) {
    let fileType = file.type;
    //console.log(fileType);
    let validExtensions = ['application/msword', 'application/pdf'];

    if (validExtensions.includes(fileType)) {

        /* Must be optimised !!*/
        if (fileType === 'application/msword') {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                let fileURL = fileReader.result;
                //console.log(fileURL);
                let wordReader = `<a href="${fileURL}"> Clicker ici pour télécharger le fichier</a>`;
                dragArea.innerHTML = wordReader;
            };

            fileReader.readAsDataURL(file);
        } else {
            /*       let fileReader = new FileReader();
                   fileReader.onload = () => {
                       let fileURL = fileReader.result;
                       //console.log(fileURL);
                       let wordReader = `<a href="${fileURL}"> Open </a>`;
                       dragArea.innerHTML = wordReader;
                   };
       
                   fileReader.readAsDataURL(file);
                   */
        }


    } else {
        alert('Document .doc seulement');
        dragArea.classList.remove('active');
    }
}