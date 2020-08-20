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
const homeBtn = document.querySelector('.btn-home');
const progressText = document.querySelectorAll('.step p');
const progressCheck = document.querySelectorAll('.step .check');
const bullet = document.querySelectorAll('.step .bullet');
const acceptFee = document.querySelector('.accept-fees input');
let max = 4;
let current = 1;

// Inputs
let controlOutput = document.querySelector('#controlOutput');
let orderDate = document.querySelector('#order_date');
let orderAddress = document.querySelector('#order_address');
let orderCity = document.querySelector('#order_city');
let orderInfo = document.querySelector('#order_info');
let carRegno = document.querySelector('#car_regno');
let carRegnoCert = document.querySelector('#car_regno_cert');
let carRegnoCertDate = document.querySelector('#car_regno_date');
let carBrand = document.querySelector('#car_brand');
let carModel = document.querySelector('#car_model');
let carYear = document.querySelector('#car_year');
let carColor = document.querySelector('#car_color');
let carWheels = document.querySelector('#car_wheels');
let carRegnoQty = document.querySelector('#car_regqty');
let carKeys = document.querySelector('#car_keys');
let ownerName = document.querySelector('#owner_name');
let ownerAddress = document.querySelector('#owner_address');
let ownerZip = document.querySelector('#owner_zip');
let ownerCity = document.querySelector('#owner_city');
let ownerPhone = document.querySelector('#owner_phone');
let ownerMail = document.querySelector('#owner_mail');
let otherContact = document.querySelector('#other_contact');
let otherName = document.querySelector('#other_name');
let otherAddress = document.querySelector('#other_address');
let otherZip = document.querySelector('#other_zip');
let otherCity = document.querySelector('#other_city');
let otherPhone = document.querySelector('#other_phone');
let otherMail = document.querySelector('#other_mail');
let otherInfo = document.querySelector('#other_info');


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
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

nextBtnSec.addEventListener('click', function() {
    slidePage.style.marginLeft = '-50%';
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

nextBtnThird.addEventListener('click', function() {
    slidePage.style.marginLeft = '-75%';
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    current += 1;
    window.scroll({top: 0, left: 0, behavior: 'smooth'});

    // Output all info for control
    controlOutput.innerHTML = `
        <table>
            <tr>
                <td>Hämtdag: </td>
                <td>${orderDate.value}</td>
            </tr>
            <tr>
                <td>Adress: </td>
                <td>${orderAddress.value}</td>
            </tr>
            <tr>
                <td>Ort: </td>
                <td>${orderCity.value}</td>
            </tr>
            <tr>
                <td>Övrig info: </td>
                <td>${orderInfo.value}</td>
            </tr>
            <tr class="colspan">
                <td colspan="2">Bilinformation</td>
            </tr>
            <tr>
                <td>Regnummer: </td>
                <td>${carRegno.value}</td>
            </tr>
            <tr>
                <td>Kontrollnr: </td>
                <td>${carRegnoCert.value}</td>
            </tr>
            <tr>
                <td>Regbevis datum: </td>
                <td>${carRegnoCertDate.value}</td>
            </tr>
            <tr>
                <td>Bilmärke: </td>
                <td>${carBrand.value}</td>
            </tr>
            <tr>
                <td>Bilmodell: </td>
                <td>${carModel.value}</td>
            </tr>
            <tr>
                <td>Årsmodell: </td>
                <td>${carYear.value}</td>
            </tr>
            <tr>
                <td>Antal hjul: </td>
                <td>${carWheels.value}</td>
            </tr>
            <tr>
                <td>Antal regskyltar: </td>
                <td>${carRegnoQty.value}</td>
            </tr>
            <tr>
                <td>Nycklar: </td>
                <td>${carKeys.value}</td>
            </tr>
            <tr class="colspan">
                <td colspan="2">Ägarinformation</td>
            </tr>
            <tr>
                <td>Namn: </td>
                <td>${ownerName.value}</td>
            </tr>
            <tr>
                <td>Adress: </td>
                <td>${ownerAddress.value}</td>
            </tr>
            <tr>
                <td>Postnummer: </td>
                <td>${ownerZip.value}</td>
            </tr>
            <tr>
                <td>Postort: </td>
                <td>${ownerCity.value}</td>
            </tr>
            <tr>
                <td>Telefon: </td>
                <td>${ownerPhone.value}</td>
            </tr>
            <tr>
                <td>E-post: </td>
                <td>${ownerMail.value}</td>
            </tr>
            <tr>
                <td>Beställarinfo: </td>
                <td>${otherContact.value}</td>
            </tr>
            <div class="control-other">
                <tr class="colspan">
                    <td colspan="2">Beställarinfo</td>
                </tr>
                <tr>
                    <td>Namn: </td>
                    <td>${otherName.value}</td>
                </tr>
                <tr>
                    <td>Adress: </td>
                    <td>${otherAddress.value}</td>
                </tr>
                <tr>
                    <td>Postnummer: </td>
                    <td>${otherZip.value}</td>
                </tr>
                <tr>
                    <td>Postort: </td>
                    <td>${otherCity.value}</td>
                </tr>
                <tr>
                    <td>Telefon: </td>
                    <td>${otherPhone.value}</td>
                </tr>
                <tr>
                    <td>E-post: </td>
                    <td>${otherMail.value}</td>
                </tr>
            </div>
        </table>
    `;
});

// Prev buttons
prevBtnSec.addEventListener('click', function() {
    slidePage.style.marginLeft = '-0%';
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

prevBtnThird.addEventListener('click', function() {
    slidePage.style.marginLeft = '-25%';
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

prevBtnFourth.addEventListener('click', function() {
    slidePage.style.marginLeft = '-50%';
    bullet[current - 2].classList.remove('active');
    progressText[current - 2].classList.remove('active');
    progressCheck[current - 2].classList.remove('active');
    current -= 1;
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});

// Submit button
submitBtn.addEventListener('click', function() {
    submitTitle.innerHTML = 'Bokning skickad 🎉'
    submitTitle.style.textAlign = 'center';
    submitBtn.style.display = 'none';
    prevBtnFourth.style.display = 'none';
    homeBtn.style.display = 'block';
    bullet[current - 1].classList.add('active');
    progressText[current - 1].classList.add('active');
    progressCheck[current - 1].classList.add('active');
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
    controlOutput.style.display = 'none';
    setTimeout(function() {
        submitMessage.innerHTML = 'En e-post har skickats till dig med mer information gällande din bokning 😎';
    });
});

// Back to start btn 
homeBtn.addEventListener('click', function() {
    // Do something
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

// Validation 
