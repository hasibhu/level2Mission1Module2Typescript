





// type assertion 



const kgToGrm = (value: string|number): string|number|undefined => {
    
    if (typeof value === 'string') {
        const convertedValue = parseFloat(value) * 1000;
        return `The converted value is ${convertedValue} grams`;
    }


    if (typeof value === 'number') {
        const convertedValue = value * 1000;
        return `The converted value is ${convertedValue} grams`;
    }

}


// console.log(kgToGrm("900"));