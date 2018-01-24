class Tab{
    constructor(){
        this.init();
    }
    init(){
        this.creatTab();
        this.initTab();
    }
    creatTab(){
        //获取按钮
        this.inputs = document.querySelectorAll('input');

         this.content = document.getElementById('content');
         this.divs = content.querySelectorAll('div')
    }

    //按钮
    initTab(){
        for(let i=0;i<this.inputs.length;i++){
            this.inputs[i].onclick= ()=>{
                this.initTabs(i);
                
            }
        }
    }

    //按钮对应的内容
    initTabs(index){
        for(let i=0;i<this.divs.length;i++){
            this.divs[i].className=''
            this.inputs[i].className=''            
        }
        this.divs[index].className='showDiv';
        this.inputs[index].className='active'
    }
}
//实例化
let tab = new Tab();