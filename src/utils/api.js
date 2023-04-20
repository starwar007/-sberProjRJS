const onResponce = (res) => {
    return res.json();
}

class Api {
    constructor() {
        this._baseUrl = 'https://api.react-learning.ru/';
        this._headers = {
            'content-type': 'application/json'
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

    signIn(email, password) {
        return fetch(`${this._baseUrl}signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password })
        }).then(onResponce)
    }

    signUp(email, group, password) {
        return fetch(`${this._baseUrl}signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, group, password })
        }).then(onResponce)
    }


    editProfile(name, about) {
        return fetch(`${this._baseUrl}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(onResponce)
    }

    editAvatar(avatar) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        }).then(onResponce)
    }

    getPosts() {
        return fetch(`${this._baseUrl}v2/group-10/posts`, {
            headers: this._headers
        }).then(onResponce)
    }


    getPost(postID) {
        return fetch(`${this._baseUrl}v2/group-10/posts/${postID}`, {
            headers: this._headers
        }).then(onResponce)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}v2/group-10/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }

    createNewPost(postData) {
        return fetch(`${this._baseUrl}v2/group-10/posts`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(postData)
        }).then(onResponce)
    }

    editPost(editData, idPost) {
        return fetch(`${this._baseUrl}v2/group-10/posts/${idPost}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(editData)
        }).then(onResponce)
    }

    deletePost(idPost) {
        return fetch(`${this._baseUrl}v2/group-10/posts/${idPost}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(onResponce)
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}v2/group-10/posts/search?query=${searchQuery}`, {
            headers: this._headers
        }).then(onResponce)
    }

    changeLikePost(postID, isLike) {
        return fetch(`${this._baseUrl}v2/group-10/posts/likes/${postID}`, {
            method: isLike ? "DELETE" : "PUT",
            headers: this._headers
        }).then(onResponce)
    }

    createComment(idPost, commentData) {
        return fetch(`${this._baseUrl}v2/group-10/posts/comments/${idPost}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(commentData)
        }).then(onResponce)
    }

    deleteComment(idPost, idComment) {
        return fetch(`${this._baseUrl}v2/group-10/posts/comments/${idPost}/${idComment}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(onResponce)
    }

    getAllComments() {
        return fetch(`${this._baseUrl}v2/group-10/posts/comments`, {
            headers: this._headers
        }).then(onResponce)
    }

    getPostComments(postID) {
        return fetch(`${this._baseUrl}v2/group-10/posts/comments/${postID}`, {
            headers: this._headers
        }).then(onResponce)
    }

    resetPassword(email) {
        return fetch(`${this._baseUrl}forgot-password`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then(onResponce)
    }

    editPassword(tokenR, password) { 
        console.log(tokenR);
        console.log(password);
        return fetch(`${this._baseUrl}password-reset/${tokenR}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                password: password
            })
        }).then(onResponce)
    }











}

const api = new Api();

export default api;

