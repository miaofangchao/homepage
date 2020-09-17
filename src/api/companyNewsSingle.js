function url (id) {
    return 'http://m-cs.jius.net/co/newsData.asp?id=' + id
}
export default url

// 返回数据是一段html片段，直接插入文档。
// {
//     "title":"文章标题",
//     "time":"注册时间"
//   }
  
//  ||
//   "文章内容，html片段"