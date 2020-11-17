import request from '@/router/axios';

export const get = (url, params = {}) => {
    return request({
        url: url,
        method: 'get',
        params: {
            ...params,
        }
    });
};

export const post = (url, params = {}) => {
    return request({
        url: url,
        method: 'post',
        data: params
    });
};
