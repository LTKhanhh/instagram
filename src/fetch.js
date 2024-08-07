
import axios from 'axios';

// eslint-disable-next-line no-undef
const BASEURL = process.env.REACT_APP_API_URL;

export default function requestApi(endpoint, method, body, responseType = 'json') {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    if (body instanceof FormData) {
        console.log(1);
        headers['Content-Type'] = 'multipart/form-data';
    }

    const instance = axios.create({ headers });

    instance.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            const originalConfig = error.config;
            if (error.response && error.response.message === "Access token not found!") {
                try {
                    const refreshToken = localStorage.getItem('refreshToken');
                    if (!refreshToken) {
                        throw new Error('Refresh token not found');
                    }
                    const result = await instance.post(
                        `${BASEURL}api/ver1/auth/refreshToken`,
                        {
                            refreshToken: refreshToken
                        },
                        {
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            }
                        }
                    );
                    const { accessToken: new_access_token } =
                        result.data.result;

                    localStorage.setItem('accessToken', new_access_token);

                    originalConfig.headers['Authorization'] = `Bearer ${new_access_token}`;

                    return instance(originalConfig);
                } catch (err) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    console.log('err', err);
                    return Promise.reject(err);
                }
            }
            return Promise.reject(error);
        }
    );

    return instance.request({
        method: method,
        url: `${BASEURL}api/ver1/${endpoint}`,
        data: body,
        responseType: responseType
    });
}