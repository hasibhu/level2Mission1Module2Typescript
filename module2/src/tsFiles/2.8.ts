{
    //

    // asynchronous typescript
    console.log('asynchronous typescript');
    
    const createPromise = (): Promise<string> => {
        return new Promise <string> ((resolve, reject) => {
            const data: string = 'Hello Data'

            if (data) { 
                resolve(data)
            } else {
                reject('Fauiled to get data')
            }
        })
    };


    const showData = async( ) : Promise<string> => {
        const data:string  = await createPromise();
        console.log(data);
        return data
    }


    showData()
    //
}