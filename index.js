
console.log(" Всего 50 баллов ");
console.log(" 10 верстка");
console.log(" 10 при загрузке страницы рандомная цитата");
console.log(" 10 при перегрузке страницы рандомная цитата");
console.log(" 10 работа кнопки");
console.log(" 10 эффект при смене");


const button = document.querySelector('.btn');
const text = document.querySelector('.content');
const url = 'https://api.icndb.com/jokes/random';

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    text.textContent = data.value.joke;


  } catch (error) {
    console.error();
  }
}

fetchHandler(); 

button.addEventListener('click', () => {
 fetchHandler(); 
});

