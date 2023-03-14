const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

class Api { 
    constructor() {
        this._baseUrl = 'https://api.react-learning.ru/v2/group-10';
        this._headers = {
          'content-type': 'application/json',
        }
    }

    setToken(token) {
        this._headers = {
            'content-type': 'application/json',
            Authorization: token       
        }
    }

    getToken() {
        return this._headers.Authorization
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

const api = new Api();

export default api;
