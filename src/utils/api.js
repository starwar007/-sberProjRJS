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

const api = new Api(config);

export default api;
