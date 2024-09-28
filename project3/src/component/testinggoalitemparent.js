import GoalItemChild from './goalitemchild'

function TestingGoldItemParent(){
    return(
        <ul>
            <h1>Welcome to GoldItem Parent class</h1>
            <GoalItemChild id1 ="one" title1="open the book" />
            <GoalItemChild id1 = "two" title1 = "read all the react"/>
            <GoalItemChild id1 = "three" title1 = "forgot this book forever" />
        </ul>
    )
};
export default TestingGoldItemParent;