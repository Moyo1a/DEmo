const fetchAllUser = async () => {

    const res = await fetch("http://wifispacenotifier.herokuapp.com/getUsers", {

        headers: {
            "content-Type": "application/json",
        },
        method: "GET"

    });


    console.log(res)
    const resData = await res.json();
    if (resData) {
        alert('Suceessful fetch')
        message = resData.message;


        console.log(message);
    }
    if (resData.data.length > 0) {
        let temp = "";
        resData.data.forEach(element => {
            temp + "<tr>";
            temp += "<td>" + (element.firstName || "") + "</td>";
            temp += "<td>" + (element.emailAddress || "") + "</td>";
            temp += "<td>" + (element.accounts[0].macAddress || "") + "</td>";
            temp += "<td>" + (element.accounts[0].lastUsedIp || "") + "</td>";
            temp += "<td>" + (element.accounts[0].dueDate || "") + "</td>";
            temp += "</tr>";

        });
        console.log(temp);

        document.getElementById('bodytag').innerHTML = temp;
    };
    // last closing curly bracis
}
fetchAllUser()