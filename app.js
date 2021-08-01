const review = [{
    id : 0,
    name : 'John Dalton',
    job : 'Web Developer',
    img : 'img/pic1.jpg',
    text : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.'
},
{
    id : 1,
    name : 'Miss Jhun Jhuna',
    job : 'CEO',
    img : 'img/pic2.jpg',
    text : ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
},
{
    id : 2,
    name : 'kaki shawan',
    job : 'Human Researcher',
    img : 'img/pic3.jpg',
    text : 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi'
},
{
    id : 3,
    name : 'Sirajuddoula Nobab',
    job : 'Owner/President',
    img : 'img/pic4.jpg',
    text : 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart'

}]

const img = document.getElementById('img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('text');

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const randNumb = document.getElementById('randNumb');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson()
})

nextBtn.addEventListener('click',function(){
    currentItem ++;
    if(currentItem > review.length - 1){
        currentItem = 0;
    }
    showPerson()
})

prevBtn.addEventListener('click',function(){
    currentItem --;
    if(currentItem < 0 ){
        currentItem = review.length - 1;
    }
    showPerson()
})

randNumb.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * review.length);
    showPerson()

}
)

function showPerson(){
    const item = review[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    text.textContent = item.text
}