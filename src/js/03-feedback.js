import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');
const emaiEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');

const savelocalHost = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savelocalHost){
    emaiEl.value = savelocalHost.email;
    messageEl.value = savelocalHost.message;
}

formEl.addEventListener('input', throttle(onData, 500));

formEl.addEventListener('submit', onClear)

function onData (){
    const dataForm ={
        email: emaiEl.value,
        message: messageEl.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function onClear(evt){
    evt.preventDefault();
    console.log(`email: ${emaiEl.value} messege: ${messageEl.value}`)

    localStorage.removeItem('feedback-form-state');

    emaiEl.value ='';
    messageEl.value ='';
}