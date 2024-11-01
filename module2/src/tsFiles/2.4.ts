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

    
    interface SmartWatch {
        brand: string;
        model: string;
        display: string;
        bloodCalc?:boolean
    }

    const poorDeveloper: Developer<SmartWatch> = {
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


    const richDeveloper: Developer<SmartWatch> = {
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



// console.log(poorDeveloper, richDeveloper);


    //
}