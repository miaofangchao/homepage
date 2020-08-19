// home主页的所有数据，get
var search = location.search;
var url = "http://m-cs.jius.net/co/homeData.asp" + search
export default url


// 返回数据：
// 	{
// 		"name":"公司名字", 
//      "adderss":"公司地址", 
//      "contacts":"联系人", 
//      "tel":"电话", 
//      "topImg":"顶部图src",
// 		"productImg":[ { "title":"图片title", "src":"图片地址","sortId":"分类id"，"productId":"数据库id" },{ ... }, ...],
//  	"investmentPolicy":[ "图片路径" , ...],
// 		"companyNews":[ {"id":"文章在数据库的查询id","name":"文章名字"},{} ...]
// 		"productSort":[ {"sort":"种类名字","sortId":"对应分类id"},{} ...]
//  }   
//  ||  "公司简介信息"