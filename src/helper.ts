export async function makeRequest(url = '', data = null, method = '') {
    // Default options are marked with *
    try {
        let options: RequestInit = {
            method,// *GET, POST, PUT, DELETE, etc.
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            // body data type must match "Content-Type" header
        }

        if (data)
            options = { ...options, ...{ body: JSON.stringify(data) } }


        const response = await fetch(url, options)



        const test = await response.json()

        console.error(test.statusCode);


        console.log(test)
        return test // parses JSON response into native JavaScript objects 
    } catch (error) {
        throw new Error()
    }

}
