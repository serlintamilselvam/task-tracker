<template>
    <div v-show="showAddTask">
        <AddTask @add-task="addTask" />
    </div>
    <Tasks 
        @toggle-reminder="toggleReminder" 
        @delete-task="deleteTask" 
        :tasks="tasks" />
</template>

<script>
import Tasks from '../../components/Tasks/Tasks.vue'
import AddTask from '../../components/AddTask/AddTask.vue'

export default {
    name: 'Home',
    components: {
        Tasks,
        AddTask
    },
    props: {
        showAddTask: Boolean
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        async addTask(newTask) {

        const res = await fetch('api/tasks', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            body: JSON.stringify(newTask)
        })

        const data = await res.json()

        this.tasks = [...this.tasks, data]
        },
        async deleteTask(id) {
        if(confirm("Are you sure, You want to delete this task?")) {

            const res = await fetch(`api/tasks/${id}`, {
            method: 'DELETE'
            })

            res.status === 200 ? this.tasks = this.tasks.filter((task) => task.id !== id) : 
            alert("Error occurred while deleting the task")

            
        }
        },
        async toggleReminder(id) {

        const taskToggle = await this.fetchTask(id)
        const updateTask = {...taskToggle, reminder: !taskToggle.reminder}

        const res = await fetch(`api/tasks/${id}`, {
            method: "PUT",
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })

        const data = await res.json()

        this.tasks = this.tasks.map((task) => 
            task.id === id ? 
            {...task, reminder: data.reminder} : task)
        },
        async fetchTasks() {

        const res = await fetch("api/tasks")

        const data = await res.json()

        return data

        },
        async fetchTask(id) {
            const res = await fetch(`api/tasks/${id}`)

            const data = await res.json()

            return data
        }
    },
    async created() {
        this.tasks = await this.fetchTasks()
    }
}
</script>