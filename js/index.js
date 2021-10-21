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

if (counter%2===0) {
    ma.style.color= "red"
}else{
    ma.style.color= "yellow"
}
}, 1000);

const updateValues = async = () => {
    firstName = firstName.value;
    lastName = lastName.value;
    email = email.value


}
console.log(updateValues);


const sendData = async (firstName, lastName, email) => {
    if (!firstName || !lastName || !email) {
        return alert('Please enter all parameters')
    }
    const res = await fetch("http://wifispacenotifier.herokuapp.com/signup", {
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

    const sendData = await res.json();
    if (sendData) {
        message = await data.message;


        console.log(message);
    }
    // last closing curly bracis
}

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    updateValues();
    await sendData(firstName, lastName, email)
});

const main = async () => {
    // alert("i have start")
};
main()