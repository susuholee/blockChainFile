import axios from 'axios';

const getCount = async() => {
    const { data } = await axios.get('http://localhost:4000/getCount');
    console.log(data);
    return data;
}

const setCount = async (_increamentValue) => {
    const { data } = await axios.post('http://localhost:4000/setCount', {increamentCount : _increamentValue})
    return data;
}

const updateCount = async (_increamentValue) => {
    const { data } = await axios.post('http://localhost:4000/setCount', {increamentCount : _increamentValue})
    return data;
}
export {getCount, setCount, updateCount}