export default {
    template: `
    
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>
    <ul>
        <!-- looping through a list  -->
        <li v-for="assignment in assignments" 
            :key="assignment.id">    <!-- when it not comlete it will be adden to the list -->
            <!-- key is so important when it comes to loops it help vue to know exactly where you are   -->
            <label>
                {{ assignment.name}}
                <input type="checkbox" v-model="assignment.complete"> <!--in this way when we set it done it will be true -->
                <!-- v-model => when we just want to listen to certian thing , v-bind used when we bind attributes with expression or certian result  -->
            </label>
            </li>
        
    </ul>
</section>
    
    
    ` ,
    props: {
        assignment: Array , 
        title : String
    }
}
