new Vue({
    el: '#app',
    data: {
        fakeTasks: [],
        times: [
            '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00', '5:00'
        ],
        tasklistVisible: false,
        taskFormVisible: false
    },

    methods: {
        addTask: function(){
            this.fakeTasks.unshift({
                name: 'task'
            });
            console.log("add task");
        },
    }

});
