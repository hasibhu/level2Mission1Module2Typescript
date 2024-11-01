{
    // 

    // generic constraint with keyof operator

    
    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }



    type Owner = "bike" | "car" | "ship"; //manual 

    type Owner2 = keyof Vehicle;




    const user = {
        name: 'Hasib',
        age: 39,
        address: 'Berlin'
    }



    const getPropertyValu = <X, Y extends keyof X>(obj: X, key: Y)=>{
        return obj[key];
        }




console.log(getPropertyValu(user, "name"));
    









    // 
}