//Сортировка фоток
var v =altrpHelpers.getDataByPath('altrppagestate.pits');
v.forEach(m=>
    m.photo_array=m.photo_array.sort((a,b)=>{
        if(new Date(a.date) > new Date(b.date)) 
            return 1; 
        else if(new Date(a.date) == new Date(b.date))
            (a.filename > b.filename) ? 1 : -1;
        else 
            return -1;
    }
));