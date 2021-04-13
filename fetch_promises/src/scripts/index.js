// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

const myModal = document.getElementById('myModal');
const span = document.querySelector('span');

span.addEventListener('click', function(){
    myModal.style.display = 'none';
});

function waitforModal(time){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(true);
        }, time)
    })
}

waitforModal(3000).then((state) => {
    if(state){
        myModal.style.display = 'block';
    }
})


// \/ All of your javascript should go here \/

