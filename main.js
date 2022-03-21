function authorise() {
    const login = prompt("Enter Your Login")
    if(login === "Admin"){
        const password = prompt("Enter Your Password")
        if(password === "12345"){
            alert("Ласкаво Просимо!");
        }
        else {
            alert("Невірний Пароль");
        }
    } else {
        alert("Доступ Заборонено");
    }
}

function multiply() {
    let result = 1;
    let m = +prompt("Введіть число більше від 0");
    if (m <= 0) {
        m = +prompt("Введіть число більше від 0");
    }
    let n = +prompt("Введіть число більше від " + m);
    if (m > n) {
        n = +prompt("Введіть число більше від " + m);
    }
    for(let i = m; i <= n; i++) {
        if( i % 2 !== 0) {
          result *= i;  
        }
    }
    console.log(result);
}

multiply();