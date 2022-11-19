const loader = document.querySelector('.loader')

// select inputs
const submitBtn = document.querySelector('.submit-btn')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const number = document.querySelector('#number')
const tac = document.querySelector('#terms-and-cond')
const notification = document.querySelector('#notification')

submitBtn.addEventListener('click', () => {
    // if(name.value.length < 3){
    //     showAlert('Name must be 3 letters long');
    // } else if (!email.value.length){
    //     showAlert('Enter your email');
    // } else if(!password.value.length){
    //     showAlert('Password should be 8 letters long')
    // } else if(!number.value.length){
    //     showAlert('Enter your phone number')
    // } else if(!Number(number.value) || number.value.length < 8 && number.value.length > 13){
    //     showAlert('Invalid number, please enter valid one')
    // } else if(!tac.checked){
    //     showAlert('You must agree with our terms and conditions')
    // } else{
    //submit form

    loader.style.display = 'block'
    saveData('/signup', {
        name: name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        tac: tac.checked,
        notification: notification.checked,
        seller: false
    })
    //}
})

//send data function
// const sendData = (path, data) => {
//     fetch(path, {
//         method: 'post',
//         headers: new Headers({ 'Content-Type': 'application/json' }),
//         body: JSON.stringify(data)
//     }).then((res) => res.json())
//         .then(response => {
//             // console.log(response);
//             processData(response);
//         })
// }

// const processData = (data) => {
//     loader.style.display = null;
//     if (data.alert) {
//         showAlert(data.alert);
//     }
// }

//alert funtion
const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000);
}

//local storage

const saveData = () => {
    
}   