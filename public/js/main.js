const tolog = document.querySelector('.tolog');
const toreg = document.querySelector('.toreg');

const register = document.querySelector('.reg');
const login = document.querySelector('.log');
const home = document.querySelector('.home');


///////////////////
const sendtoback = document.querySelector('.sendtoback');
const positionedit = document.querySelector('#positionedit');
const companyedit = document.querySelector('#companyedit');
const area1 = document.querySelector('#area');
const area2 = document.querySelector('#area2');
const area3 = document.querySelector('#area3');
const montlypay = document.querySelector('#montlypay');
const period = document.querySelector('#period');
const description = document.querySelector('#description');

//////////////////

const editboard = document.querySelector('#editboard');
const showboard = document.querySelector('#showboard');
const jobshow = document.querySelector('.jobshow');
const positionsshow = document.querySelector('#positions');
const companyshow = document.querySelector('#company');
const location1 = document.querySelector('#location1');
const location2 = document.querySelector('#location2');
const location3 = document.querySelector('#location3');
const prices = document.querySelector('#prices');
const timePeriod = document.querySelector('#timePeriod');
const descriptionpp = document.querySelector('#descriptionpp');
const status = document.querySelector('#status');


////////////// //////// ///////////////

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const FJ = document.querySelector('.FJD');

FJ.style.display = 'none'
login.style.display = 'none'
home.style.display = 'none'
jobshow.style.display = 'none'

toreg.addEventListener('click',(e)=>{
    e.preventDefault();
    login.style.display = 'none'

    if(login.style.display == 'none'){
        register.style.display = 'block'
        }


})

tolog.addEventListener('click',(e)=>{
    e.preventDefault()
    register.style.display = 'none'

    if(register.style.display == 'none'){
        login.style.display = 'block'
        }

    
})

editboard.addEventListener('click',(e)=>{
    e.preventDefault()
    jobshow.style.display = 'none'

    if(jobshow.style.display == 'none'){
        sendtoback.style.display = 'block'
        }

    
})

showboard.addEventListener('click',(e)=>{
    e.preventDefault()
    sendtoback.style.display = 'none'

    if(sendtoback.style.display == 'none'){
        jobshow.style.display = 'block'
        }

    
})

btn1.addEventListener('click',(e)=>{
    e.preventDefault()
    const psv = positionedit.value;
    const cv = companyedit.value;
    const a1v = area1.value;
    const a2v = area2.value;
    const a3v = area3.value
    const mpv = montlypay.value;
    const pv = period.value;
    const dv = description.innerHTML;

    //////// ////////

    positionsshow.innerText = psv;
    companyshow.innerText = cv;
    location1.innerText = a1v;
    location2.innerText = a2v;
    location3.innerText = a3v;
    prices.innerText = mpv;
    timePeriod.innerText = pv;
    descriptionpp.innerHTML = dv;
    
})

