// document.getElementById('btn-submit').addEventListener('click', function () {
//     //steep 2 get the email inside the email filed
//     //always remembers to use .value to get form an input field
//     const emailField = document.getElementById('user-email');
//     const email = emailField.value;
//     // setep 3 get password 
//     // 3.a set get id on the html element
//     // 3.b get the element
//     // 3.c get the value form the element
//     const paswordField = document.getElementById('user-pass')
//     const password = paswordField.value;

//     // do not verify emeil on the client silde
//     // step 4 verify email and passworld and check whether valid user or not

//     if (email === 'kalam@gmail.com' && password === '123') {
//         window.location.href = 'bank.html'
//     } else {
//         alert('user type invlide')
//     }

// })

// step 0

document.getElementById('btn-submit').addEventListener('click', function () {
    // step 1
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 2
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    // step 3
    if (email === 'kalam@gmail.com' && password === '123') {
        window.location.href = 'bank.html'
    } else {
        alert('put valid input')
    }
})