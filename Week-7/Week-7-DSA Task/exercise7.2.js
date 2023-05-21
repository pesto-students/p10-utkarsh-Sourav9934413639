let query=[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ;
function spiral(matrix){
    let top=0;
    let bottom=matrix.length-1;
    let left=0;
    let right=matrix[0].length-1;
    let dir="forward";
    while((top<=bottom)&&(left<=right))
    {
        if(dir=="forward")
        {
            for(let i=left;i<=right;i++){
                console.log(matrix[top][i]);
            }
            top++;
            dir="down";
        }
        if(dir=="down")
        {
            for(let i=top;i<=bottom;i++){
                console.log(matrix[i][right]);
            }
            right--;
            dir="backward";
        }
        if(dir=="backward")
        {
            for(let i=right;i>=left;i--){
                console.log(matrix[bottom][i]);
            }
            bottom--;
            dir="up";
        }
        if(dir=="up")
        {
            for(let i=bottom;i>=top;i--){
                console.log(matrix[i][left]);
            }
            left++;
            dir="forward";
        }
    }
}
spiral(query);