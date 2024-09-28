import GoalItemChild from './goalitemchild'

function GoldItem(){
    return(
        <ul>
            <h1>Welcome to GoldItem Parent class</h1>
            <GoalItemChild id ="1" title="Finish the book" />
            <GoalItemChild id = "2" title = "Learn all about react"/>
            <GoalItemChild id = "3" title = "revise again and again" />
        </ul>
    )
};
export default GoldItem;