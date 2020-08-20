const form = document.querySelector('form');
const slidePage = document.querySelector('.slidepage');
const firtNextBtn = document.querySelector('.nextBtn');
const prevBtnSec = document.querySelector('.prev-1');
const nextBtnSec = document.querySelector('.next-1');
const prevBtnThird = document.querySelector('.prev-2');
const nextBtnThird = document.querySelector('.next-2');
const prevBtnFourth = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');
const submitMessage = document.querySelector('.submit-message');
const submitTitle = document.querySelector('.submit-title');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
const acceptFee = document.querySelector('.accept-fees input');
let max = 4;
let current = 1;

let controlOutput = document.querySelector('#controlOutput');
let pickupDate = document.querySelector('#order_date');
let pickupAddress = document.querySelector('#order_address');
let pickupCity = document.querySelector('#order_city');
let pickupInfo = document.querySelector('#order_info');
let orderName = document.querySelector('#order_name');
let orderMail = document.querySelector('#order_mail');
let orderPhone = document.querySelector('#order_phone');


// Prevent form from submit 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    return;
});

// Next buttons
firtNextBtn.addEventListener('click', function() {
    slidePage.style.marginLeft = '-25%';
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
});

nextBtnSec.addEventListener('click', function() {
    slidePage.style.marginLeft = '-50%';
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
});

nextBtnThird.addEventListener('click', function() {
    slidePage.style.marginLeft = '-75%';
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;

    console.log(pickupDate.value, pickupAddress.value);

});

// Prev buttons
prevBtnSec.addEventListener('click', function() {
    slidePage.style.marginLeft = '-0%';
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
});

prevBtnThird.addEventListener('click', function() {
    slidePage.style.marginLeft = '-25%';
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
});

prevBtnFourth.addEventListener('click', function() {
    slidePage.style.marginLeft = '-50%';
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
});

// Submit button
submitBtn.addEventListener('click', function() {
    submitTitle.innerHTML = "Message sent🎉"
    submitTitle.style.textAlign = "center";
    submitBtn.style.display = "none";
    prevBtnFourth.innerHTML = "Back to home!";
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    controlOutput.style.display = 'none';
    setTimeout(function() {
        submitMessage.innerHTML = "A mail has been sent to you with further information regarding your booking 😎";
    });
});

// Disable buttons
nextBtnThird.disabled = true;

acceptFee.addEventListener('click', function() {
    //console.log(acceptFee.checked);
    if(acceptFee.checked === false) {
        console.log('nu är den av');
        nextBtnThird.disabled = true;
    } else {
        nextBtnThird.disabled = false;
    }
});

// Output all info for control
controlOutput.innerHTML = `
    <table>
        <tr>
            <td>Hämtdag</td>
            <td></td>
        </tr>
        <tr>
            <td>Adress</td>
            <td></td>
        </tr>
        <tr>
            <td>Ort</td>
            <td></td>
        </tr>
        <tr>
            <td>Övrig info</td>
            <td></td>
        </tr>
        <tr>
            <td>Namn</td>
            <td></td>
        </tr>
        <tr>
            <td>E-post</td>
            <td></td>
        </tr>
        <tr>
            <td>Telefon</td>
            <td></td>
        </tr>
    </table>
`;
