import '.modules/variables'








import displayLeader from './displayLeader';
const config = {headers: {Accept: 'application/json'},

    postMessage= async (url, dataObj) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify(dataObj);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        }

        fetch(url, requestOptions);
    }

    const getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        displayLeader(data);
    };

    export { PostData, getData };