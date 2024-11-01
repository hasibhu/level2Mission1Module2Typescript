{
    //

    // generic interface

    interface Developer<T> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        },
        smartWatch: T
    };

    

    const poorDeveloper: Developer<T> = {
        name: 'hasib',
        computer: {
            brand: 'apple',
            model: 'mac Studio M2 Max',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'apple',
            model: 'ultra',
            display: 'Oled'
        }
    }


    const richDeveloper: Developer = {
        name: 'hasib',
        computer: {
            brand: 'apple',
            model: 'macbook pro',
            releaseYear: 2023
        },
        smartWatch: {
            brand: 'apple',
            model: 'gen2',
            display: 'Oled',
            bloodCalc: true
        }
    }






    //
}