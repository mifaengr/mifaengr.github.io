let countItems = 0;

const shoppingListContainer = document.getElementById('shopping-list');

function createRowElement() {
    console.log(shoppingListContainer.childElementCount)
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    return row;
}


function addItemToShopping(item) {
    if (countItems === 0) {
        let row_id = 'row_id_' + (shoppingListContainer.childElementCount + 1);

        const row = createRowElement();
        row.id = row_id;
        countItems++;
        console.log('Items:' + countItems);


        console.log('Itesm:' + countItems);
        shoppingListContainer.appendChild(row);
        const col = document.createElement('div');
        col.setAttribute('class', 'col-sm-3');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.style.marginTop = '20px';
        let this_id = item + '_shop';
        card.setAttribute('id', this_id);
        const image = document.createElement('img');
        image.src = "images/" + item + ".jpg";
        image.setAttribute('class', 'card-img-top img-fluid');
        image.alt = item[0].toUpperCase() + item.slice(1);
        let itemContent = item[0].toUpperCase() + item.slice(1);
        const shoppingBody = document.createElement('div');
        shoppingBody.setAttribute('class', 'card-body');
        shoppingBody.innerHTML = '<h6 class="card-title">' + itemContent + '</h6><div class="text-center">' +
            '<button id="btn-add-cocumber" style="width:60px;background-color: #b6d4fe" class="btn btn-default btn-sm text-center"><i class="fa fa-shopping-cart"></i></button></div>';


        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(image);
        card.appendChild(shoppingBody);
        const cardBody = document.createElement('div');

    } else {
        if (countItems < 3) {
            countItems++;
            console.log('Itesm:' + countItems);
        } else {
            countItems = 0;
        }
        let this_id = item + '_shop';
        const _shop = document.getElementById(this_id);
        if (!_shop) {
            let row_id = 'row_id_' + shoppingListContainer.childElementCount;
            const row = document.getElementById(row_id);
            const col = document.createElement('div');
            col.setAttribute('class', 'col-sm-3');
            const card = document.createElement('div');
            card.setAttribute('class', 'card');
            let _id = item + '_shop';
            card.style.marginTop = '20px';
            card.setAttribute('id', _id);
            const image = document.createElement('img');
            image.src = "images/" + item + ".jpg";
            image.setAttribute('class', 'card-img-top img-fluid');
            image.alt = item[0].toUpperCase() + item.slice(1);
            let itemContent = item[0].toUpperCase() + item.slice(1);
            const shoppingBody = document.createElement('div');
            shoppingBody.setAttribute('class', 'card-body');
            shoppingBody.innerHTML = '<h6 class="card-title">' + itemContent + '</h6><div class="text-center">' +
                '<button id="btn-add-cocumber" style="width:60px;background-color: #b6d4fe" class="btn btn-default btn-sm text-center"><i class="fa fa-shopping-cart"></i></button></div>';
    
    
            row.appendChild(col);
            col.appendChild(card);
            card.appendChild(image);
            card.appendChild(shoppingBody);
        }

    }
}


const btnAddApple = document.getElementById('btn-add-apple');
const btnAddAvocado = document.getElementById('btn-add-avocado');
const btnAddBanana = document.getElementById('btn-add-banana');
const btnAddCabbage = document.getElementById('btn-add-cabbage');
const btnAddCocumber = document.getElementById('btn-add-cocumber');
const btnAddOnion = document.getElementById('btn-add-onion');
const btnAddPineapple = document.getElementById('btn-add-pineapple');
const btnAddPomegranate = document.getElementById('btn-add-pomegranate');
const btnAddPotato = document.getElementById('btn-add-potato');

btnAddApple.addEventListener('click', function () {
    let item = 'apple';
    addItemToShopping(item);
});

btnAddAvocado.addEventListener('click', function () {
    let item = 'avocado';
    addItemToShopping(item);
});

btnAddBanana.addEventListener('click', function () {
    let item = 'banana';
    addItemToShopping(item);
});

btnAddCabbage.addEventListener('click', function () {
    let item = 'cabbage';
    addItemToShopping(item);
});

btnAddCocumber.addEventListener('click', function () {
    let item = 'cocumber';
    addItemToShopping(item);
});

btnAddOnion.addEventListener('click', function () {
    let item = 'onion';
    addItemToShopping(item);
});

btnAddPineapple.addEventListener('click', function () {
    let item = 'pineapple';
    addItemToShopping(item);
});

btnAddPomegranate.addEventListener('click', function () {
    let item = 'pomegranate';
    addItemToShopping(item);
});

btnAddPotato.addEventListener('click', function () {
    let item = 'potato';
    addItemToShopping(item);
});

