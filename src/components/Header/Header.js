import Button from '../Button/Button'

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: "Task Tracker"
        },
        showAddTask: Boolean
    },
    components: {
        Button
    }
}