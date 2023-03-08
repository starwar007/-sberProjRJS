const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api { 
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getPosts() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this._headers
        }).then(onResponce)
    }

    getPost(postID) {
        return fetch(`${this._baseUrl}/posts/${postID}`, {
            headers: this._headers
        }).then(onResponce)
    }

    getUserInfo() { 
        //console.log(this.headers);
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }

    createNewPost(postData) {
        return fetch (`${this._baseUrl}/posts`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(postData)
        }).then(onResponce)
    }

    editPost(editData, idPost) {
        return fetch (`${this._baseUrl}/posts/${idPost}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(editData)
        }).then(onResponce)
    }

    deletePost(idPost) {
        return fetch (`${this._baseUrl}/posts/${idPost}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(onResponce)
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/posts/search?query=${searchQuery}`, {
            headers: this._headers
        }).then(onResponce)
    }

    changeLikePost(postID, isLike) {
        return fetch(`${this._baseUrl}/posts/likes/${postID}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this._headers
        }).then(onResponce)
    }

    createComment(idPost, commentData) {
        return fetch (`${this._baseUrl}/posts/comments/${idPost}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(commentData)
        }).then(onResponce)
    }

    deleteComment(idPost, idComment) {
        return fetch (`${this._baseUrl}/posts/comments/${idPost}/${idComment}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(onResponce)
    }

    getAllComments() {
        return fetch(`${this._baseUrl}/posts/comments`, {
            headers: this._headers
        }).then(onResponce)
    }

    getPostComments(postID) {
        return fetch(`${this._baseUrl}/posts/comments/${postID}`, {
            headers: this._headers
        }).then(onResponce)
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru/v2/group-10',
    headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UxMjY2ZTU5Yjk4YjAzOGY3N2IyMTAiLCJncm91cCI6Imdyb3VwLTEwIiwiaWF0IjoxNjc1NzAwMDM1LCJleHAiOjE3MDcyMzYwMzV9.gw6DkXAc71WKR2SVfEIut01efqnndnQ2LzIZ4CGHT4Y'
    }
}


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
// export default api;