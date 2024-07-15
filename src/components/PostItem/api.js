import requestApi from "~/fetch";

import axios from "axios";

export const getCommentById = async (id) => {
    let data = []
    await requestApi(`comment/${id}`, 'get')
        .then(res => {
            data = res.data.data
            // console.log(res)

        })
        .catch((error) => {
            console.log(error)
        })

    return data
}

export const postComment = async (id, text) => {
    let inputobj = { 'title': text }
    // inputobj.append("image", selectedFile); nhưng mà thử lấy ra xem đc k



    requestApi(`comment/${id}`, 'post', inputobj)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}