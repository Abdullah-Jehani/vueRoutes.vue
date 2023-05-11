import assignmentList from "./assignmentList.js";

export default {
    components : {
        assignmentList
    } , 
    template: `
    <assignmentList :assignment="incompleteAssignments" title="inProgress"></assignmentList>
    <assignmentList :assignment="completedAssignments" title="Completed"></assignmentList>

    ` , 
    data () {
        return {
            assignments: [
                {name: 'Finish Project' , complete: false , id:1 } , 
                {name: 'Finish chapter 4' , complete: false , id:2 } ,  
                {name: 'Finish Assigment' , complete: false , id:3 }  
    
            ]
        }
    } , 
    computed: { // computed properties are like methods but they are cached , they are not re-evaluated unless their dependencies change
        completedAssignments() {
            return this.assignments.filter(a=>a.complete === true) ; 
        } , 
        incompleteAssignments() {
            return this.assignments.filter(a=>a.complete === false) ; 
        }
    }
    
    
    
    
    
    } ; 
