
let firstName = document.querySelector('.firstName')
let lastName = document.querySelector('.lastName')
let email = document.querySelector('.email')
let btn = document.querySelector('button')
let message

const updateValues = async = () => {
    firstName = firstName.value;
    lastName = lastName.value;
    email = email.value;
    

}
console.log(updateValues)

const sendData = async(firstName, lastName, email) => {
    if (!firstName || !lastName || !email) {
        return alert('please enter the parameters')
    }

    const response = await fetch("http://wifispacenotifier.herokuapp.com/signup", {
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            emailAddress: email,



        }),

        headers: {
            "content-Type": "application/JSON",
        },
        method: "POST"
    });

    const sendData = await response.json()
    if (sendData) {
        message = await data.message;

        console.log(message);
    }
}


btn.addEventListener ('click', async (m) =>{
m.preventDefault;
updateValues;
 await sendData(firstName, lastName, email);
})

const main = async () =>{

}
main ()