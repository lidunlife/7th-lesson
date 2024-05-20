let OtaDiv = document.getElementById(`ota`)
let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];



data.forEach((i) => {
    let text = document.createElement(`h3`);
    text.innerHTML = i
    text.style.textAlign = `center`
    text.style.width =`50%`
    if (i>50) {
        text.style.background = `red`
    }else{
        text.style.background = `green`
    }
    OtaDiv.appendChild(text)
});
