/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
//这道算法题目既没有用到set，也没有用到map
// 是因为这个是和次数有关的，不是去查有没有某一个东西（has方法），所以只需要数组就可以
//只要这个对应的字母次数余额为0就代表不可以了
var canConstruct = function (ransomNote, magazine) {
  //空间换时间，先用map记下magzine里面出现的字母和次数
  //然后去遍历ransomNote，每次都找相应的索引减-1，如果该值为0则return flase
  //循环完还没return flase就代表是了
  let map = new Array(26).fill(0) //搞一个数组下标存储的就是字母，值存储的就是字母出现次数
  let base = 'a'.charCodeAt() //定义基准
  for (const item of magazine) {
    //遍历magzine
    map[item.charCodeAt() - base]++ //把相应的数组值增加
  }
  for (const item of ransomNote) {
    //遍历ransomNote
    if (map[item.charCodeAt() - base] > 0) {
      //如果发现这个字母还有余额就-1
      map[item.charCodeAt() - base]--
    } else {
      return false
    } //没余额就返回false
  }
  return true //所有ransomNote都有余额就return true
}
