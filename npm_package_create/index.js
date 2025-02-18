
const binarySearch = (arr, x) => {

    let low = 0 , high = arr.length - 1 , mid;

    while(low <= high){

        mid = Math.floor(low +(high - low) /2);

        //if x present in middle 
        
        if( arr[mid] == x){
            return mid;
        }

        // if mid ele smaller then x
        else if( arr[mid] < x){
            low  = mid + 1;
        }

        // if mid ele greater than x
        else  high = mid - 1;
    }

    return -1;

}


module.exports = binarySearch;