
let firstName = document.querySelector('.firstName');
let lastName = document.querySelector('.lastName');
let email = document.querySelector('.email');
let btn = document.querySelector('button');
let message
let ma = document.querySelector('header a')


counter = 0
let x = setInterval(() => {
    counter++
    console.log(counter)

    if (counter % 2 === 0) {
        ma.style.color = "red"
    } else {
        ma.style.color = "yellow"
    }
}, 1000);

const updateValues = async = () => {
    firstName = firstName.value;
    lastName = lastName.value;
    email = email.value
}

console.log(updateValues);

const sendData = async (firstName, lastName, email) => {
    const response = await fetch("https://wifispacenotifier.herokuapp.com/signup", {
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            emailAddress: email,


        }),
        headers: {
            "content-Type": "application/json",
        },
        method: "POST"

    });

    let data = await response.json();
    if (data) {
        console.log(data)

    }

}

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    updateValues();
    await sendData(firstName, lastName, email)

})

const main = async = () => {

}
main()