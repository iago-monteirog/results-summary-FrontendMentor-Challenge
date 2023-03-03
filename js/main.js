let data = [];

function showCategorys(categoryList) {

    const card = document.getElementById('card');

    categoryList.forEach(element => {
        card.innerHTML += `
    <div class="result__card ${element.category}">
        <div class="category">
            <img src="${element.icon}" alt="Reaction icon">
            <span>${element.category}</span>
        </div>
        <div class="score__category">
            <span>${element.score}</span>
            <p>/100</p>
        </div>
    </div>
    `
    })
}

async function getData() {
    try {
        data = await fetch('data.json');

        const convertedData = await data.json();

         showCategorys(convertedData);
    } catch (error) {
        throw Error('Ocorreu algum erro');
    }
}

getData();



