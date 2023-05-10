    export default{
        template: `
        <button @click="change" 
         :class="{
         ' text-white font-bold py-2 px-4 rounded border disabled:cursor-not-allowed': true , 
         'bg-blue-500 hover:bg-blue-800' : type === 'primary' ,
         'bg-red-500 hover:bg-red-800' : type === 'secondary' ,
         'bg-green-500 hover:bg-green-800' : type === 'muted' ,
          'is-loading': processing   

         }"
         :disabled="processing"
         >
            <slot/> 
            </button> 
        ` ,   // slots used to dynamically change the text
   
        // this is how you identify peops
        // props used to pass data from parent to child
        
        props : {
            type : { /// name of the prop 
                type: String ,
                default : 'secondary'
            } , 
            processing : {
                type : Boolean ,
                default : false
            }
        } ,

     
        methods: {
            change() {
                this.processing = !this.processing ;
            }
        }
                
    
    
    }