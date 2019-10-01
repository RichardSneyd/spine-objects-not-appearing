import FindAndCount from "./1_FindAndCount";


export default class FindAndCount_Polar extends FindAndCount {
    
    constructor(key: string){
        super(key, [
            {   
                key: 'adult_bear',
                x: 330,
                y: 400
            },
            {   
                key: 'polar_bear_cub_1',
                x: 900,
                y: 550
            },
            {   
                key: 'polar_bear_cub_2',
                x: 1470,
                y: 500
            }
        ]);
    }
}