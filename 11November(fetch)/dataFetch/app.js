const ul = document.getElementById("list");

axios.get('https://northwind.vercel.app/api/suppliers').then(resp => {

    for (let i = 0; i < resp.data.length; i++) {
        const li = document.createElement("li");
        li.innerText = `${resp.data[i].companyName},  ${resp.data[i].address.city}`;
        ul.append(li);
    }
});


