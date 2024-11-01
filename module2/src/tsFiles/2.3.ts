{
    // Generic type


    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>

    // const rollNumber: number[] = [3, 5, 9];
    const rollNumber: GenericArray<number> = [3, 5, 9];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: GenericArray<boolean> = [true, false, true];




    const user: GenericArray<{ name: string; course: string;  term: number}> = [
        {
            name: 'PH',
            course: 'Level 2',
            term: 2
        },
        {
            name: 'PH',
            course: 'Level 1',
            term: 1
        },
    ]

console.log(user);






}