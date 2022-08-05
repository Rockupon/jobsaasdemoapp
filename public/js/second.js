const fullItemInfor = document.querySelector('.fullJobDescription');
var dataAttributes;

const form = document.querySelector('#form');
const name = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const roles = document.querySelector('#roles');
const email2 = document.querySelector('#email2');
const password2 = document.querySelector('#password2');
const form2= document.querySelector('#form2');
// const home= document.querySelector('.home');

///////////////////
document.querySelector('.adminemployer12').style.display = 'none'
// const sendtoback = document.querySelector('.sendtoback');
// const positionedit = document.querySelector('#positionedit');
// const companyedit = document.querySelector('#companyedit');
// const area1 = document.querySelector('#area2');
// const area2 = document.querySelector('#area2');
// const area3 = document.querySelector('#area3');
// const montlypay = document.querySelector('#montlypay');
// const period = document.querySelector('#period');
// const description = document.querySelector('#description');

// //////////////////

// const editboard = document.querySelector('#editboard');
// const showboard = document.querySelector('#showboard');
// const jobshow = document.querySelector('.jobshow');
// const positionsshow = document.querySelector('#positions');
// const companyshow = document.querySelector('#company');
// const location = document.querySelector('#location');
// const prices = document.querySelector('#prices');
// const timePeriod = document.querySelector('#timePeriod');
// const descriptionpp = document.querySelector('#descriptionpp');
// const status = document.querySelector('#status');

/////////////////

////////// axios urls /////////

const registerUrl = '/regster/register';
const loginUrl = '/regster/login';
const logoutUrl = '/regster/logout';
const jobsUrl = '/thejobs';

////////// axios urls /////////

function sendtolog(){

    register.style.display = 'none'

    if(register.style.display == 'none'){
        login.style.display = 'block'
        }
}

function sendtohome(){
    
    login.style.display = 'none';
    home.style.display = 'block';
    
}

const createUser = async (e)=>{
    e.preventDefault()
    console.log('cu')
    try {
        await axios.post(registerUrl,{
        name:name.value,
        email:email.value,
        password:password.value,
        role:roles.value,
        })
        .then((res)=>{
            console.log(res)
            sendtolog()
        })
        .catch((err)=>{
            console.log(err.response)
        })

    } catch (error) {
        console.log(`sorry bro your machine is shit_ ${error}`);
    }
    


}


const logUser = async (e)=>{
    e.preventDefault()
   
    try {
        await axios.post(loginUrl,{
        email:email2.value,
        password:password2.value
        })
        .then((res)=>{
            console.log(res)
            sendtohome();
        })
        .catch((err)=>{
            console.log(err.response)
        })

    } catch (error) {
        console.log(`sorry bro your machine is shit_ ${error}`);
    }
}

const loadJobs = async (e)=>{
    
   const gridmine = document.querySelector('.gridmine')
    try {
        await axios.get(jobsUrl)
        .then((res)=>{
            console.log(res)
            const jobs = res.data.jobs;

            const newJob = jobs.map((job)=>{
                return  ` <div data-itemId=`${job._id} class="job">
                <h1 class="positions">${job.position}</h1>
                <h2 class="company">${job.company}</h2>
                <h2 class="user">${job.city}, ${job.provices}, ${job.country}</h2>
                <div>
                    <p class="prices">${job.prices}</p>
                    <p class="timePeriod">${job.timePeriod}</p>
                </div>
                
                <div class="status">${job.status}</div>

            </div>`
            }).join('');

            gridmine.innerHTML =`<div class="sendnodes btn3">click me </div>  ${newJob}`;
            
            const btn3 = gridmine.querySelector('.btn3');

            btn3.addEventListener('click',(e)=>{
                home.style.display = 'none'
                document.querySelector('.adminemployer12').style.display = 'block'
            });

          var jobPosts = gridmine.querySelectorAll('.job');
           jobPosts.forEach((jobz)=>{
              jobz.addEventListener('click',(e)=>{
                dataAttributes = e.currentTarget.getAttribute('data-itemId');
                home.style.display = 'none';
                fullItemInfor.style.display = 'block';
                getSingleItem();
           })
           })
        })
        .catch((err)=>{
            console.log(err.response)
        })

    } catch (error) {
        console.log(`sorry bro your machine is shit_ ${error}`);
    }
}

const sendjobtobackend = async (e)=>{
    try {
        await axios.post(jobsUrl,{
            company : companyedit.value,
            description: description.textContent, 
            position : positionedit.value, 
            country : area3.value, 
            provices : area2.value, 
            city :  area1.value, 
            prices:montlypay.value,
        })
        .then((res)=>{
            
            console.log(res.data)
            
        })
        .catch((err)=>{
            console.log(err.response)
        })

    } catch (error) {
        console.log(`sorry bro your machine is shit_ ${error}`);
    }
}

const getOnlyOneItems = async (e)=>{
    e.preventDefault();
   
    try {
        await axios.get(jobsUrl)
        .then((res)=>{
            console.log(res)
          
        })
        .catch((err)=>{
            console.log(err.response)
        })

    } catch (error) {
        console.log(`sorry bro your machine is shit_ ${error}`);
    }
}

const getSingleItem = async (e)=>{
  try {
    await axios.get(jobsUrl,params:{
    _id: dataAttributes,
    })
    .then((res)=> {
      
      fullItemInfor.innerHTML = ` 
        <div class="jobHeader">
        <br />
        <p class="jT">${res.data.job.position}</p>
        <p class="cT">${res.data.job.company}</p>
        <p>location</p>
        <br />
        <p class="jD"><b>job details</b></p>
        <br />
        <p><b>time bases</b></p>
        <li class="grey">${res.data.job.timePeriod}</li>
        <br />
        <br />
      </div>
      <div class="jobTextDetail">
        <br />
        <p class="fJD">full job description </p>
        <div>
          ${res.data.job.description}
        </div>
        <br />
        <br />
        <br />
      </div>
      <div class="jobPostInfor">
        <p class="hI">Hiring Insights</p>
        <li class="grey">Hiring 1 candidate for this role</li>
        <p><b>job activity</b></p>
        <li class="grey">${res.data.job.status}</li>
        
        <li class="grey">job posted: <i>30+ days ago</i></li>
        <li class="grey">job boost level: <i>30lv+</i></li>
        <br />
      </div>
      <div class="jobApplyBtn">
        <div>
           <button type="submit">apply now</button>
        </div>
       
      </div>
       `

     fullItemInfor.querySelector('button').addEventListener('click',(e)=>{
               e.preventDefault()
               home.style.display = 'block';
               fullItemInfor.style.display = 'none';
      })
    })
    .catch((err)=>{
     Console.log(err)
    })
  } catch (error) {
    console.log("there is a err of: "+error)
  }
}

const getOnlyOneItem = async (e)=>{
    e.preventDefault();
   
    try {
        await axios.get(jobsUrl)
        .then((res)=>{
            console.log(res)
          
        })
        .catch((err)=>{
            console.log(err.response)
        })

    } catch (error) {
        console.log(`sorry bro your machine is shit_ ${error}`);
    }
}

btn2.addEventListener('click',(e)=>{
    sendjobtobackend();
    loadJobs();

    home.style.display = 'block'
    document.querySelector('.adminemployer12').style.display = 'none'

})


form.addEventListener('submit',createUser);


form2.addEventListener('submit',logUser)

loadJobs();
