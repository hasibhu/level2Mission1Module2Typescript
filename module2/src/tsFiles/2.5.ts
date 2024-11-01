{
    //
    //function with generic

    const createArray = (param: string) : string[] => {
        return[param]
    }

  const res1 = createArray('bangladesh');
    // console.log(res1);



    // schema function with generic 
    // const createArrayWithGeneric = (param: string) : string[] => {
    //     return[param]
    // }
    
    const createArrayWithGeneric = <T>(param: T) : T[] => {
        return[param]
    }

    console.log(createArrayWithGeneric({id: 200, name: 'Hasib'}));
    console.log(createArrayWithGeneric<{ id: number; name: string }>({ id: 200, name: 'Hasib' }));
    

    type User = { id: number;  name: string}
    console.log(createArrayWithGeneric<User>({id: 200, name: 'Hasib'}));

  





    //
}