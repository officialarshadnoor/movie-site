const { useState, useEffect } = require("react");


function useFetchData() {
    const [alldata, setAlldata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(()=> {
        if (initialLoad){
            setInitialLoad(false);
            setLoading(false);
            return; //exit useEffect
        }

        // set loading to true to indicate data fetching
        setLoading(true);

        const fetchAllData = async () => {
            try {
const res = await axios.get(apiEndpoint);
const alldata = res.data;
setLoading(false);
            }
            catch(e){
console.error("Error fetching movie data", error);
setLoading(false);
            }
        }

// fetch movie data only if category exits

if(apiEndpoint) {
    fetchAllData(); // call this function if api exists
}

    }, [initialLoad, apiEndpoint]); // depend on ini and apiendpoint to trigger api call

    return {alldata, loading};
}

export default useFetchData;

