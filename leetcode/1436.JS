/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function(paths) {
    //建立新的数组
    const CitiesA=[];
    //遍历起始的paths数组并添加出发地点至新数组
    for(const path of paths){
        CitiesA.push(path[0]);
    }
    //如果path[1]中的地点不在新数组中即为终点
    for(const path of paths){
        if(!CitiesA.includes(path[1]))
        return path[1];
    }
    return ""

};