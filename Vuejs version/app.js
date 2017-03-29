new Vue({
    el: '#app',
    data: {
        fakeTasks: [],
        dummyTask: {name:'', description:'', duration: 0},
        times: [
            '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'
        ],
        tasklistVisible: false,
        taskFormVisible: false
    },

    methods: {
        addTask: function(){
            this.fakeTasks.unshift({
                name: this.dummyTask.name
            });
            this.taskFormVisible = false;
            console.log("add task");
        },
        setName: function(event){
        	this.dummyTask.name = event.target.value
        },
        setDescription: function(event){
        	this.dummyTask.description = event.target.value
        },
        setDuration: function(event){

        }
    }

});
