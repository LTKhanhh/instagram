import requestApi from "~/fetch";

import axios from "axios";

export const getPost = async (page) => {
    let data = []
    await requestApi(`post?page=${page}`, 'get')
        .then(res => {
            data = res.data.data


        })
        .catch((error) => {
            console.log(error)
        })

    return data
}