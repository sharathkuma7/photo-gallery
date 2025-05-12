const images=document.querySelectorAll('.Photo img');
images.forEach(function(img) {
    img.addEventListener('click',() => {
        alert('you clicked on:' + img.alt);
    })
})