import axios from "axios"

const getList = async ({pageParam = 1}) => {
    const { data : { pageList } } = await axios.get(`http://localhost:4000/getList/${pageParam}`)
    console.log(pageList);
    return pageList;
}

export {getList}
