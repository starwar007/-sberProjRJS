const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api {
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl= baseUrl;
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac'
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UzOWY0NTU5Yjk4YjAzOGY3N2IzNTIiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc1ODYyNDA5LCJleHAiOjE3MDczOTg0MDl9.7F0ASss9-a3_UHT8tGx2-x3MYGjpsTD4eKkNI0VfEYs'
}}

const api = new Api(config);

                        // const emoe = api.getUserInfo();
                        // 
                        const emoe = api.getUserInfo().then((result) => {console.log(result.email)});
                        // console.log(emoe);


                        // const emoe = api.getUserInfo().then((result) => {console.log(result.email)});
                        // console.log(emoe);

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












                    // const address = fetch("https://jsonplaceholder.typicode.com/users/1")
                    //   .then((response) => response.json())
                    //   .then((user) => {
                    //     return user.address;
                    //   });

                    // const printAddress = async () => {
                    //   const a = await address;
                    //   console.log(a);
                    // };

                    // printAddress();

                    // async function MOE() {
                    // const { foo, bar }  = await api.getUserInfo().then(result => result.data);


                    // // const { foo, bar }  = await iAmAPromise.then(result => result.data);
                    // // const emoe = api.setUserInfo(userUpdateData).then((newUserData) => {setCurrentUser(newUserData)};
                    // }

                    // MOE();


export default api;