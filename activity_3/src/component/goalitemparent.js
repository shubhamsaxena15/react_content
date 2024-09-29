import GoalItemChild from './goalitemchild'

function GoalItemParent(){
    return(
        <ul>
            <GoalItemChild title="Teach React in a highly-understandable way">
            I want to ensure, that you get the most out of this book and you learn
            all about React!
            </GoalItemChild>
            <GoalItemChild title="Allow you to practice what you learned">
            Reading and learning is fun and helpful but you only master a topic, if
            you really work with it! That's why I want to prepare many exercises
            that allow you to practice what you learned.
            </GoalItemChild>
            <GoalItemChild title="Motivate you to continue learning">
            As a developer, learning never ends. I want to ensure that you enjoy
            learning and you're motivated to dive into advanced (React) resources
            after finishing this book. Maybe my complete React video course?
            </GoalItemChild>

        </ul>
    )

};
export default GoalItemParent;