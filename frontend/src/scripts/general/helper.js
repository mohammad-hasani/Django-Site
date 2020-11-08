import store from '../../redux/store'


export const convertStringTOList = data => {
    if (typeof data !== 'undefined' && typeof data === 'string') {
        data = data.substring(1, data.length - 1);
        const dataList = data.split(',');
        for (var i = 0; i < dataList.length; i++) {
            dataList[i] = dataList[i].trim();
            dataList[i] = dataList[i].substring(1, dataList[i].length - 1);
            dataList[i] = dataList[i].split(':')[1]
        }
        return dataList;
    } else
        return null
};

export const getTokenHeader = (headers=undefined) => {
    const token = store.getState().login.token;
    if (headers === undefined) {
        const header = {'headers': {'Authorization': `Token ${token}`}};
        return header;
    }else{
        console.log(headers);
        headers['headers'] = {'Authorization': `Token ${token}`};
        return headers;
    }
};

export const getEmail = () => {
    const email = store.getState().login.email;
    return {'email': email};
};