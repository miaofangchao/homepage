<template>
  <div
    id="leave-message"
    class="m_bk"
    style="padding-top: 10px;"
  >
    <form action="" method="post" name="thisForm" ref="myform">
      <div class="lytit">
        对该公司产品感兴趣，请立即咨询↓
      </div>
      <div class="lyny">
        <ul class="tianx">
          <li>
            <input type="text" :value="productId" style="display:none" name="ID">
            <input type="text" :value="comId" style="display:none" name="ComID">
            <label for="ipuname">您的名字：</label>
            <input
              id="ipuname"
              name="Name"
              type="text"
              class="inputly"
              placeholder="请输入姓名"
              v-model="name"
            >
            <span class="sex">
              <input type="radio" name="Sex" value="1" v-model="sex" id="sex1"><label for="sex1">先生</label>
              <input type="radio" name="Sex" value="2" v-model="sex" id="sex2"><label for="sex2">女士</label>
            </span>
          </li>
          <li>
            <label for="iptel">联系电话：</label>
            <input
              id="iptel"
              name="Tel"
              type="number"
              maxlength="11"
              class="inputly"
              placeholder="请输入手机号"
              v-model="tel"
            >
          </li>
          <li id="msgdiv">
            <label>所在地区：</label>
            <select name="province" v-model="area">
              <option value="请选择地区">请选择地区</option>
              <option v-for="item in provinceArr" :key="item.index" :value="item[0]">{{item[0]}}</option>
            </select>
            <select name="city" v-model="city">
              <option v-for="item in matchCity[0]" :key="item.index" :value="item">{{item}}</option>
            </select>
          </li>
        </ul>
        <div class="xxlist">
          <ul>
            <li>
              <input name="radio" id="radio-1" type="radio" v-model="radio" value="有意向代理贵公司，请寄资料或给我打电话。"><label for="radio-1">有意向代理贵公司，请寄资料或给我打电话。</label>
            </li>
            <li>
              <input name="radio" id="radio-2" type="radio" v-model="radio" value="很感兴趣，想知道代理细节，请尽快联系我。"><label for="radio-2">很感兴趣，想知道代理细节，请尽快联系我。</label>
            </li>
            <li>
              <input name="radio" id="radio-3" type="radio" v-model="radio" value="我想做长期团购，请尽快联系我。"><label for="radio-3">我想做长期团购，请尽快联系我。</label>
            </li>
          </ul>
          <textarea
            id="ipcons"
            class="ztcont"
            name="Intro"
            placeholder="想了解加盟流程和费用"
            v-model="radio"
          />
        </div>
        <div class="uxy">
          <input
            id="forone"
            value="1"
            name="QQ"
            type="radio"
            checked="checked"
            v-model="qq"
          >
          <label for="forone">
            同意同类厂家查看
            <a
              href="http://www.jius.net/fwtk.html"
              target="_blank"
            >《中国酒商网代理商服务条款》</a>
          </label>
        </div>
        <div class="uxy">
          <input
            id="fortwo"
            value="2"
            name="QQ"
            type="radio"
            v-model="qq"
          >
          <label for="fortwo">
            同意本厂家查看
            <a
              href="http://www.9928.tv/sevicetk.html"
              target="_blank"
            >《中国酒商网代理商服务条款》</a>
          </label>
          <input type="text" name="QH" value="" maxlength="20" class="hidText">
          <input type="text" name="Wx" value="" maxlength="20" class="hidText">
        </div>
        <input
          id="postButton"
          type="submit"
          class="tijiaobtn"
          value="立即咨询"
          v-tap="{methods:submitMsg}"
        >
      </div>
    </form>
  </div>
</template>
<script>
import myToast from '@/views/myToast'
import leaveMsg from '@/api/leave-msg'
import "@/assets/icon/font_duihao/iconfont.css"
export default {
  data() {
    return {
      provinceArr:null,
      cityArr:null,
      area:'请选择地区',
      name:'',
      sex:1,
      tel:'',
      radio:'有意向代理贵公司，请寄资料或给我打电话。',
      city:'',
      qq:1
    }
  },
  computed: {
    //根据选择的省份，获取对应的城市
    matchCity () {
      return this.cityArr.filter((item,index)=>{
        let n = this.provinceArr.findIndex((item)=>{
          return item == this.area
        })
        return index == n
      })
    },
    comId(){
      return this.$store.state.comId
    },
    productId(){
      if(this.$store.state.msg){
        let n = this.$store.state.msg.productImg.length
        return this.$store.state.msg.productImg[n-1].productId
      }else{
        return null
      }
    },
    comName(){
      if(this.$store.state.msg){
        return this.$store.state.msg.msgname
      }else{
        return null
      }
    },
    flId(){
      if(this.$store.state.msg){
        return this.$store.state.msg.flId
      }else{
        return null
      }
    },
    email(){
      return this.area + this.city
    }
  },
  methods: {
    submitMsg(){
      if(this.name === ''){
        myToast('请输入姓名',1500)
      }else if(!(/^1[3456789]\d{9}$/).test(parseInt(this.tel))){
        myToast('手机号码有误',1500)
      }else if(this.area == '请选择地区' || this.city == ''){
        myToast('请选择地区',1500)
      }else if(this.radio == '') {
        myToast('请输入留言信息',1500)
      }else{
        leaveMsg({
          comId:this.comId,
          productId:this.productId,
          name:this.name,
          sex:this.sex,
          tel:this.tel,
          email:this.email,
          radio:this.radio,
          qq:this.qq,
          comName:this.comName,
          flId:this.flId
        }).then(res=>{
          // console.log(res.data)
          if(res.data.indexOf('代理意向提交成功') != -1){
            myToast('提交成功',2000,'icon-duihao')
            this.name = this.tel = ''
          }else{
            myToast('信息错误，请核对信息',1500)
          }
        }).catch(err=>{
          console.log(err)
          myToast('出错了，请联系管理员',1500)
        })
      }
    }
  },
  created() {
    //保存省份数组
    var provinceArr = [];
    provinceArr[0] = ['北京'];
    provinceArr[1] = ['天津'];
    provinceArr[2] = ['上海'];
    provinceArr[3] = ['重庆'];
    provinceArr[4] = ['河北'];
    provinceArr[5] = ['河南'];
    provinceArr[6] = ['云南'];
    provinceArr[7] = ['辽宁'];
    provinceArr[8] = ['黑龙江']; 
    provinceArr[9] = ['湖南']; 
    provinceArr[10] = ['安徽'];
    provinceArr[11] = ['山东'];
    provinceArr[12] = ['新疆']; 
    provinceArr[13] = ['江苏'];
    provinceArr[14] = ['浙江'];
    provinceArr[15] = ['江西'];
    provinceArr[16] = ['湖北'];
    provinceArr[17] = ['广西'];
    provinceArr[18] = ['甘肃'];
    provinceArr[19] = ['山西'];
    provinceArr[20] = ['内蒙古'];
    provinceArr[21] = ['陕西'];
    provinceArr[22] = ['吉林'];
    provinceArr[23] = ['福建'];
    provinceArr[24] = ['贵州'];
    provinceArr[25] = ['广东'];
    provinceArr[26] = ['青海'];
    provinceArr[27] = ['西藏'];
    provinceArr[28] = ['四川'];
    provinceArr[29] = ['宁夏'];
    provinceArr[30] = ['海南'];
    provinceArr[31] = ['台湾'];
    provinceArr[32] = ['香港'];
    provinceArr[33] = ['澳门'];
    //市县,每个数组第一个元素为省份,其他的为这个省份下的市县
    var cityArr = [];
    cityArr[0] = ['东城', '西城','崇文','宣武','朝阳','丰台','石景山', '海淀','门头沟', '房山','通州','顺义','昌平','大兴','怀柔','平谷 ','密云','延庆'];
    cityArr[1] = ['和平','河东', '河西', '南开', '河北', '红桥', '塘沽', '汉沽', '大港', '东丽', '西青', '津南', '北辰', '武清', '宝坻', '宁河', '静海', '蓟县']; 
    cityArr[2] = ['黄浦','卢湾', '徐汇','长宁','静安','普陀','闸北','虹口', '杨浦', '闵行', '宝山', '嘉定', '浦东新', '金山', '松江', '青浦', '南汇', '奉贤', '崇明']; 
    cityArr[3] = ['万州','涪陵','渝中','大渡口','江北','沙坪坝','九龙坡','南岸','北碚','万盛','双桥','渝北','巴南','黔江','长寿','江津','合川','永川','南川','綦江','潼南','铜梁','大足','荣昌','璧山','梁平','城口','丰都','垫江','武隆','忠县','开县','云阳','奉节','巫山','巫溪','石柱','秀山','酉阳','彭水']; 
    cityArr[4] = ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水']; 
    cityArr[5] = ['郑州','开封','洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '济源', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店']; 
    cityArr[6] = ['昆明',' 曲靖','玉溪','保山','昭通','丽江','思茅','临沧','楚雄','红河','文山','西双版纳','大理','德宏','怒江','迪庆']; 
    cityArr[7] = ['沈阳' ,'大连' ,'鞍山' ,'抚顺' ,'本溪' ,'丹东' ,'锦州' ,'营口' ,'阜新' ,'辽阳' ,'盘锦' ,'铁岭' ,'朝阳' ,'葫芦岛']; 
    cityArr[8] = ['哈尔滨','齐齐哈尔','鸡西','鹤岗','双鸭山', '大庆', '伊春', '佳木斯', '七台河', '牡丹江', '黑河', '绥化', '大兴安岭']; 
    cityArr[9] = ['长沙', '株洲','湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西']; 
    cityArr[10] = ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州','阜阳','宿州', '巢湖', '六安', '亳州', '池州', '宣城']; 
    cityArr[11] = ['济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','莱芜','临沂','德州','聊城','滨州','菏泽'];
    cityArr[12] = ['乌鲁木齐', '克拉玛依', '吐鲁番地', '哈密地', '昌吉', '博尔塔拉', '巴音郭楞', '阿克苏地', '克孜勒苏柯尔克孜', '喀什地', '和田地', '伊犁哈萨克', '塔城地', '阿勒泰地', '石河子', '阿拉尔', '图木舒克', '五家渠' ]; 
    cityArr[13] = ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁' ];
    cityArr[14] = ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水']; 
    cityArr[15] = ['南昌','景德','萍乡','九江','新余','鹰潭','赣州','吉安','宜春','抚州','上饶'];
    cityArr[16] = ['武汉','黄石','十堰', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '恩施','仙桃', '潜江', '天门', '神农架'];
    cityArr[17] = ['南宁','柳州','桂林','梧州','北海','防城港','钦州','贵港','玉林','百色','贺州','河池','来宾','崇左'];
    cityArr[18] = ['兰州','嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏', '甘南'];
    cityArr[19] = ['太原','大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁' ];
    cityArr[20] = ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安盟', '锡林郭勒盟', '阿拉善' ];
    cityArr[21] = ['西安','铜川','宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛' ];
    cityArr[22] = ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'];
    cityArr[23] = ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德' ];
    cityArr[24] = ['贵阳','六盘水', '遵义', '安顺', '铜仁地', '黔西', '毕节地', '黔东南', '黔南'];
    cityArr[25] = ['广州','韶关','深圳','珠海','汕头','佛山','江门','湛江','茂名','肇庆','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'];
    cityArr[26] = ['西宁' ,'海东地', '海北', '黄南', '海南', '果洛', '玉树', '海西'];
    cityArr[27] = ['拉萨','昌都', '山南', '日喀则', '那曲', '阿里', '林芝' ];
    cityArr[28] = ['成都','自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝', '甘孜', '凉山'];
    cityArr[29] = ['银川','石嘴山','吴忠','固原','中卫'];
    cityArr[30] = ['海口','三亚','五指山', '琼海', '儋州', '文昌', '万宁', '东方', '定安', '屯昌', '澄迈', '临高', '白沙', '昌江', '乐东', '陵水', '保亭', '琼中' ];
    cityArr[31] = ['台北', '高雄', '基隆', '台中', '台南', '新竹', '嘉义'];
    cityArr[32] = ['中西', '湾仔', '东区', '南区', '油尖旺', '深水埗', '九龙城', '黄大仙', '观塘', '荃湾', '葵青', '沙田', '西贡', '大埔', '北', '元朗', '屯门', '离岛' ];
    cityArr[33] = ['澳门'];
    this.provinceArr = provinceArr
    this.cityArr = cityArr
  },
};
</script>
<style lang="css">
#leave-message {
  background: #fff;
  margin-bottom: 10px;
}
.lytit {
  margin: 0 3% 6px 3%;
  background: #e5383b;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding: 6px 0;
}
.lyny {
  margin: 0 3%;
}
.tianx li {
  border: #cccbcb 1px solid;
  padding: 7px 4px;
  border-radius: 4px;
  line-height: 28px;
  height: 28px;
  font-size: 120%;
  position: relative;
  margin: 10px 0;
}

.inputly {
  border: 0;
  line-height: 28px;
  outline: none;
  width: 70%;
  font-size: 100%;
  font-family: "Microsoft yahei";
  color: #555;
}
.xxlist {
  margin: 10px 0;
}
.xxlist li {
  font-size: 110%;
  line-height: 28px;
  color: #555;
  text-align: left;
  display: flex;
  align-items: center;
}
.xxlist li input,.uxy input,.tianx .sex input{
  margin-right: 5px;
}
.ztcont {
  border: #e5e5e5 1px solid;
  border-radius: 4px;
  width: 97%;
  font-size: 16px;
  line-height: 24px;
  height: 72px;
  margin-top: 6px;
  font-family: "Microsoft yahei";
  color: #888;
  padding: 3px 1%;
}

.uxy {
  font-size: 100%;
  color: #555;
  line-height: 22px;
  text-align: left;
  display: flex;
  align-items: center;
}
.tijiaobtn {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border: 0;
  background: #e5383b;
  border-radius: 4px;
  font-family: "Microsoft yahei";
  padding: 6px 0;
  margin-top: 10px;
}
#leave-message select{
  width: 33%;
  margin-right: 5px;
  border-radius: 5px;
  border-color: #cccccc;
  vertical-align: text-bottom;
  font-size: 90%;
}
.hidText{
  display: none;
}
.tianx .sex {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

</style>