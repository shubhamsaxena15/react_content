import GoalItemChild from './goalitemchild'

function GoalItemParent(){
    return(
        <ul>
            <GoalItemChild title="Teach React in a highly-understandable way">
            I want to ensure, that you get the most out of this book and you learn
            all about React!
            </GoalItemChild>
        </ul>
    )

};
export default GoalItemParent;