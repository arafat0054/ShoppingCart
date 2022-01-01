let AddCartButtons = document.querySelectorAll('#addToCart')
let CartContainer = document.getElementsByTagName('tbody')[0]
let DeleteButtons = document.getElementsByClassName('uk-button-danger')

//number of item
for (let i = 0; i < AddCartButtons.length; i++) {
    AddCartButtons[i].addEventListener('click', AddToCart)
}

//add to cart
function AddToCart(event) {
    let ItemContainer = document.createElement('tr')
    let btn = event.target
    let btnGrandParent = btn.parentElement.parentElement
    let btnParent = btn.parentElement
    let ItemImage = btnGrandParent.children[0].src
    let ItemName = btnParent.children[0].innerText
    let ItemPrice = btnParent.children[1].innerText


    ItemContainer.innerHTML = `
    <td><input type="checkbox"></td>
    <td><img src=${ItemImage} width="50" alt="" srcset=""></td>
    <td>
        <h3>${ItemName}</h3>
    </td>
    <td>
        <h3>${ItemPrice}</h3>
    </td>
    <td><input type="number" id="Quantity" value="1"></td>
    <td>
        <h3>${ItemPrice}</h3>
    </td>
    <td><button class="uk-button-danger" type="button">Remove</button></td>
    `

    CartContainer.append(ItemContainer)

    for (let i = 0; i < DeleteButtons.length; i++) {
        DeleteButtons[i].addEventListener('click', RemoveItem)
    }



}


//Remove Item

function RemoveItem(event) {
    del_Btn = event.target
    del_Parent = del_Btn.parentElement.parentElement
    del_Parent.remove()

}


