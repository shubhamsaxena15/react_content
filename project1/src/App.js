import Firstcomponent from "./Newcomponent";
import SubmitButton from "./buttoncompo";
import AuthForm from "./authformcompo";
import WithoutJSXComponent from "./withoutjsx"
import MultiLineReturn from "./multilinereturn"
import MultiLineReturn2 from "./multilinereturn2"
import ReturnWithVariable from "./returnwithvariable"
import OutputDynamicContent from "./outputdynamiccontent"


function App() {
  return (
    <>
    <Firstcomponent />
    <h1> Welcome to Java Script with React Library</h1>
    <SubmitButton />
    <AuthForm />
    <WithoutJSXComponent />
    <MultiLineReturn />
    <MultiLineReturn2 />
    <ReturnWithVariable />
    <OutputDynamicContent />
    </>
  );
}

export default App;
