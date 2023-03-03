const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor() {
        this._baseUrl = 'https://api.react-learning.ru';

        this._headers = {
            'content-type': 'application/json'    
        }

        // this._headers = {
        //     'content-type': 'application/json',
        //     Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac' 
        // }
    }


    setToken(token) {
        this._headers = {
            'content-type': 'application/json', 
            Authorization: token      
        }
    }


    // setToken(token) {
    //     this._headers = {
    //         'content-type': 'application/json',
    //         Authorization: token
    //         //Authorization: `'${token}'`
    //         //Authorization: 'token555'     
    //     }
    //     console.log(this._headers.Authorization);
    //     return this._headers.Authorization;
    //     //return this._headers;
    // }

    // setToken() { 
    // // console.log('tokenFSDFD');
    // return function set2token() {console.log('Баран')}
    //     // this._headers = {
    //     //     'content-type': 'application/json',
    //     //     Authorization: token       
    //     // }
    // }

    // setToken() {
    //     this._headers = {
    //         'content-type': 'application/json',
    //         Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y4YWU3ZjRlZTQxOTk3NWZiZDI4OTciLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc3MjQxOTk1LCJleHAiOjE3MDg3Nzc5OTV9.pJwg6SsKGtps2IBaqwASz-kTBJqSzf7yf3--TBO-vOo'
    //     }
    // }








    signUp(body) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(body)
        })
    }

    
    // signUp(email, group, password) {
    //     return fetch(`${this._baseUrl}/signup`, {
    //         method: 'POST',
    //         headers: this._headers,
    //         body: JSON.stringify({email, group, password})
    //     })
    // }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({email, password})
        })
    }

    // signIn(email, password) {
    //     return fetch(`${this._baseUrl}/signin`, {
    //         method: 'POST',
    //         headers: this._headers,
    //         body: JSON.stringify({email, password})
    //     }).then(onResponce)
    // }

    // fetch(`https://api.react-learning.ru/signin`, {
    //                       method: "POST",
    //                       headers: {
    //                         // "Accept": "application/json",
    //                         "Content-Type": "application/json"
    //                       },
    //                       body: JSON.stringify(body)
    //                     })

    getProductList() {
        return fetch(`${this._baseUrl}/products`, {
            headers: this._headers
        }).then(onResponce)
    }

    getUserInfo() { 
        //console.log(this.headers);
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }

    // getUserInfo() {
    //         return fetch(`${this._baseUrl}/users/me`, {
    //             headers: {
    //                 'content-type': 'application/json',
    //                 Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
    //             }
    //         }).then(onResponce)
    //     }

    getProductById(idProduct) {
        return fetch(`${this._baseUrl}/products/${idProduct}`, {
            headers: this._headers
        }).then(onResponce)
    }

    setUserInfo(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(dataUser)
        }).then(onResponce)
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
            headers: this._headers
        }).then(onResponce)
    }

    changeLikeProduct(productId, isLike) {
        return fetch(`${this._baseUrl}/products/likes/${productId}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this._headers
        }).then(onResponce)
    }
}




const api = new Api();
console.log(api);

console.log(api.setToken());
console.log(api.getUserInfo());

export default api;
























































// //setTimeout(() => alert('Для корректной работы Вам правильно нужно физически ввести TOKEN в файл api.js'), 1000);
// alert('Для корректной работы Вам правильно нужно физически ввести TOKEN в файл api.js');

// const onResponce = (res) => {
//     return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
// }

// class Api {
//     constructor({baseUrl, headers}){
//         this._headers = headers;
//         this._baseUrl= baseUrl;
//     }


//     getUserInfo() {
//         return fetch(`${this._baseUrl}/users/me`, {
//             headers: this._headers
//         }).then(onResponce)
//     }
// }

// const config = {
//     baseUrl: 'https://api.react-learning.ru',
//     headers: {
//         'content-type': 'application/json',
//         //Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
//         //Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UzOWY0NTU5Yjk4YjAzOGY3N2IzNTIiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc1ODYyNDA5LCJleHAiOjE3MDczOTg0MDl9.7F0ASss9-a3_UHT8tGx2-x3MYGjpsTD4eKkNI0VfEYs'
//         Authorization: ''
//         //По умолчанию //Authorization: ''
//         //Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y4YWU3ZjRlZTQxOTk3NWZiZDI4OTciLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc3MjQxOTk1LCJleHAiOjE3MDg3Nzc5OTV9.pJwg6SsKGtps2IBaqwASz-kTBJqSzf7yf3--TBO-vOo'
//     }
// }

// let api = new Api(config);
























































































//const emoe = api.getUserInfo().then((result) => {console.log(result.name)});


// const emoe1 = api.getUserInfo().then(result => {return result.name});            
// const NAME = async () => {
// const a = await emoe1;
// console.log(a);};
// NAME();
// const emoe2 = api.getUserInfo().then(result => {return result.email});            
// const EMAIL = async () => {
// const b = await emoe2;
// console.log(b);
// };
// EMAIL();


// export default api;