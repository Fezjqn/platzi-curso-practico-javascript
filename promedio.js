const List1 = [
    100,
    200,
    300,
    500,
    700,
];


let sumList1 = 0;
for(let i = 0; i < List1.length; i++) {
    sumList1 = sumList1 + List1[i];
    

}

const promedioList1 = sumList1 / List1.length;

function calculateMediaAritmetica(List) {
    const sumList = list.reduce(
        function(ValueAcumulated = 0, newElement) {
            return valueAcumulated + newElement;    
        }

    );

    const promedioList = sumList / List1.length;

    return promedioList;
}