//Real WOrld Pagination 


const data = [1 ,  2 , 3 ,4 ,5 ,6 , 7 , 8 , 9 ,10];
const page =  2;
const limit =  2;

//result [3  , 4]

const pagination  = (data  ,  page = 1 , limit = 5) => {
    const start =  (page-1) * limit;
    const end  = start + limit ;

    //replaxe
    return data
};

pagination({})