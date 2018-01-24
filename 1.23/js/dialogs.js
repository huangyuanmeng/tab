class diaLog{
    //构造函数
    constructor(title = "标题党", content = "今天是美好的第一天!"){
        this.title=title;
        this.content=content;       
        this.init()
    }
     //实例方法
    init(){
        this.creatDialog()
        this.dialogClick()
        
    }
    creatDialog(){
        this.btn = document.getElementById('btn');
        this.bodys = document.body;
    }
    dialogClick(){
        this.btn.onclick= ()=>{
           this.dialogBox();
        }
    }
    dialogBox(){
        //遮罩
        this.box = document.createElement('div')
        this.box.className='box';
        //弹出框
        this.main = document.createElement('div')
        this.main.className='main';
        console.log(this.bodys)
        this.bodys.append(this.box)
        this.box.append(this.main);
        //标题
        this.top = document.createElement('div')
        this.span = document.createElement('span')
        this.top.className='top';
        this.span.className='span';        
        this.top.innerHTML=this.title;
        this.span.innerHTML='x';        
        this.main.append(this.top)
        this.top.append(this.span)

        this.clickSpan();
        //main
        this.bo = document.createElement('div')
        this.bo.className='bo';
        this.bo.innerHTML=this.content;
        this.main.append(this.bo)
        //button
        this.success = document.createElement('button')
        this.error = document.createElement('button')
        this.success.id='success';
        this.error.id='error';        
        this.main.append(this.success) 
        this.main.append(this.error)   
        this.success.innerHTML='确定';
        this.error.innerHTML='取消';
        this.clickOk();
    }
    //点击确定
    clickOk(){
        this.success.onclick = ()=>{
            this.box.style.display = "none";
        }
    }
    //点击x
    clickSpan(){
        this.span.onclick = ()=>{
            this.box.style.display = "none";
        }
    }

}
//实例化对象
let dialog = new diaLog()