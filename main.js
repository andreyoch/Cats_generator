let btn = document.querySelector('.btn');
let input = document.querySelector('input');
let content = document.querySelector('.after-text');


btn.addEventListener('click',(e) => {

   let userAnswerNumber = parseInt(input.value);
   if(Number.isInteger(userAnswerNumber)){
      let textAfterGenerate = document.createTextNode(`You generated ${input.value} cats if you want new cat image please refresh the page`);
      content.appendChild(textAfterGenerate);

for(let i = 0; i < input.value; i++) {
   let imgContainer = document.createElement('div');
   imgContainer.classList.add('img-container');
   imgContainer.classList.add('img');
   let img = document.createElement('img');
   imgContainer.appendChild(img);
   let src = document.createAttribute('src');
   src.value = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
   img.setAttributeNode(src);
   let container = document.querySelector('.flex-row');
   container.appendChild(imgContainer);
}
 input.value = '';

   }
   else {
      alert('Please provide a number');
   }

});




