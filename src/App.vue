 <template>
  <div>  
    <h1>{{title}}</h1>
    <button @click="changeMood()">change</button>

  </div>
</template>

<script>
    export default {
        data(){
            return {
           
               happy: true,
               title: "Happy"   
                        }
        },
        methods: {
            changeMood() {
               this.happy=!this.happy; 
              
             // this.whateer=this.happy? "Happy":"Sad"; - krotsza metoda
            //mozna dodac 22 do <h1> i usunac tu if
               if(this.happy){
                  this.title="Happy";
               }
               else{
                  this.title="Sad"
               }
            },

         
        }
        
    };
</script>