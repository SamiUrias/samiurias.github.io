import { useState, useEffect} from 'react'
const api = './user_data.json'

const useGetData = () => {
    const [mydata, setData] = useState([]);

    useEffect(() => {
        fetch(api)
        .then( response => { return response.json()} )
        .then(data => setData(data))

    }, []);

    return mydata;
}

export default useGetData;