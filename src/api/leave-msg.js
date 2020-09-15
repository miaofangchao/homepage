import Vue from 'vue'
const leaveMsg = (option) => {
    return new Promise((resolve, reject) => {
        Vue.axios({
            // url: "http://m-cs.jius.net/test.asp",
            url: "http://cs.jius.net/Product/Refer.asp?Action=Post",
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
            responseEncoding: "gb2312",
            // 转换数据，服务端是gbk格式，用escape转码。
            // 也可以使用qs模块。qs.stringify(data)字符串化data对象，赋值给data
            transformRequest: [
                function (data) {
                    let ret = "";
                    for (let it in data) {
                        ret += escape(it) + "=" + escape(data[it]) + "&";
                    }
                    return ret;
                },
            ],
            data: {
                ComID: option.comId,//公司id
                ID: option.productId,//产品id
                Name: option.name,//姓名
                Sex:option.sex,//性别
                Tel: option.tel,//电话
                Email: option.email,//地址
                Intro: option.radio,//留言内容
                QQ: option.qq,//允许查看范围
                ComName:option.comName,//公司名
                Fl:option.flId//企业分类
            },
        }).then(res => {
            resolve(res)
        },
            (err) => {
                reject(err)
                console.log(err)
            }
        )
    })
}
export default leaveMsg

// 发送浏览表单信息。