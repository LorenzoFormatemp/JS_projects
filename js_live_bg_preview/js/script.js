const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('colorBox');


// notazione con funzione 'freccia' => più moderna
/* colorPicker.addEventListener('input', () => {
    let color = colorPicker.value;
    colorBox.style.backgroundColor = color;
}); */

// notazione tradizionale
colorPicker.addEventListener('input', changeColor);

function changeColor(){
    let color = colorPicker.value;
    colorBox.style.backgroundColor = color;
};