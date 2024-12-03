const nameText = document.querySelector('.nameText');
const name = document.querySelector('.name');
const color = document.querySelector('.color')
const colorText = document.querySelector('.colorText');
const energy = document.getElementById('type');
const energyBall = document.querySelector('.energy');
const HPText = document.querySelector('.HP-input');
const HP = document.querySelector('.HPNum');
const power1Text = document.querySelector('.power1Text');
const power1 = document.querySelector('.power1');
const power2Text = document.querySelector('.power2Text');
const power2 = document.querySelector('.power2');
const description1Text = document.querySelector('.description1Text');
const description1 = document.querySelector('.description1');
const description2Text = document.querySelector('.description2Text');
const description2 = document.querySelector('.description2');
const weaknessText = document.querySelector('.weaknessText');
const weakness = document.querySelector('.weakness');
const quoteText = document.querySelector('.quoteText');
const quote = document.querySelector('.quote');

quoteText.addEventListener('input', () => {
    quote.innerText = quoteText.value;
})
weaknessText.addEventListener('input', () => {
    weakness.innerText = weaknessText.value;
})

description1Text.addEventListener('input', () => {
    description1.innerText = description1Text.value;
})
description2Text.addEventListener('input', () => {
    description2.innerText = description2Text.value;
})
power1Text.addEventListener('input', () => {
    power1.innerText = power1Text.value;
})
power2Text.addEventListener('input', () => {
    power2.innerText = power2Text.value;
})
HPText.addEventListener('input', () => {
    HP.innerText = HPText.value;
})



energy.addEventListener('change', () => {
    energyBall.src = `images/${energy.value}.png`
    })

nameText.addEventListener('input', () => {
    name.innerText = nameText.value;
});


colorText.addEventListener('input', () => {
    color.style.background = colorText.value;

})

const imageInput = document.getElementById('imageInput')
const image = document.querySelector('.image')

imageInput.addEventListener('change', () => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

const shine = document.querySelector('.shine')
const shineEvent = document.getElementById('shine');
const noShineEvent = document.getElementById('noShine');

if (noShineEvent.checked){
        shine.style.display = 'none';
} else {
    shine.style.display = 'block';
}

shineEvent.addEventListener('change', () => {
    if (shineEvent.checked){
        shine.style.display = 'block';
    } else {
        shine.style.display = 'none';
    }
})

noShineEvent.addEventListener('change', () => {
    if (noShineEvent.checked){
        shine.style.display = 'none';
    } else {
        shine.style.display = 'block';
    }
})

