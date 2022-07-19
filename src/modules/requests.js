export const fetchData = async (url, options = undefined) => {
    const  path=`$`
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (error) {
        console.log(error.message);
        return null;
    }
}