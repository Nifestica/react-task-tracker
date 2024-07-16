import Header from "./components/Header"
import Greet from "./components/Greet"
import Welcome from "./components/welcome"
import Declare from "./components/PropsTest"
import Message from "./components/message"
import Counter from "./components/Counter"
import Cool from "./components/Props2"
import Sample from "./components/childrenProps"
import FunctionClick from "./components/functionClick"
import ClassClick from "./components/classClick"
import Eventbind from "./components/Eventbind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/NameList"
import Stylesheet from "./components/Stylesheet"
import Inline from "./components/Inline"
import './appStyles.css'
import styles from './appStyles.module.css'
import NameListt from "./components/NameListt"
import  {FancyButton, StyledButton}  from "./components/styledComponents/button/button.styles"
import Form from "./components/Form"
import LifecycleA from "./components/cycles/LifecycleA"
import FragmentDemo from "./components/Fragment/FragmentDemo"
import Table from "./components/Fragment/Table"
// import PureComp from "./components/Fragment/PureComp"
import ParentComp from "./components/Fragment/ParentComp"
//import RefDemo from "./components/Ref/RefDemo"
//import FocusInput from "./components/Ref/FocusInput"
import FRParentInput from "./components/Ref/FRParentInput"
import PortalDemo from "./components/PortalDemo"
import Hero from "./components/errorHandling/Hero"
import ErrorBoundary from "./components/errorHandling/ErrorBoundary"
import ClickCounter from "./components/hoc/ClickCounter"
//import HoverCounter from "./components/hoc/HoverCounter"
import ClickCounterTwo from "./Render/ClickCounterTwo"
//import User from "./Render/User"
import HoverCounterTwo from "./Render/HoverCounterTwo"




const  App = () => {
const name = 'Greatness'
const x = true
  return (
    <div className="container">
        <Header title={'Greatness'} />


        
        <h1> Hello From React</h1>
        <h2> Hello {name} </h2> 
        <p>{x ? "Yes" : "No"}</p>


        <h1 className="error"> Error</h1>
        <h1 className={styles.success}>Success</h1>
        <ParentComponent />
        <Eventbind />
      <FunctionClick/>
      <ClassClick />
  <Cool name="Oluwnifesimi" surname="Ojo" />        
        < Greet />
        <Welcome name="Ja" heroName="Batman" />
        <Welcome name="hiii" heroName="Batman" />
        <Welcome name="iye" heroName="Batman" />

  <Sample>
  <p>
      This is a children Props test
      </p>
  </Sample>

     <Declare name="Jaiye" heroName="Antman"> 
      </Declare>
     <Declare name="Tunde" heroName="Superman"/>
     <Declare name="Sade" heroName="SuperWoman">
        <button>Action</button>
       </Declare>
      <Message name="Nifesimi"/>
        <Counter  />
        < UserGreeting />
        <NameList />
        <Stylesheet primary={false} />
        < Inline /> 
        <NameListt /> 
        <StyledButton variant="outline"> Styled Button </StyledButton>
        <div>
        <br/>
        </div>
        <StyledButton> Styled Button </StyledButton>

        <FancyButton as='a'> Fancy Button </FancyButton>
      <Form />
        <LifecycleA />

      <div>
        <FragmentDemo /> 
        <Table />
        <ParentComp />
      </div>
      <div> 
      {/* <RefDemo /> */}
    {/* < FocusInput  /> */}
     <FRParentInput />

     <PortalDemo />
     <ErrorBoundary> 
      <Hero heroValidaty='Ajoke'> </Hero> 
      </ErrorBoundary>
     <ErrorBoundary>   
       <Hero heroValidaty='Tobi'> </Hero>
        </ErrorBoundary>
      <ErrorBoundary>    
        < Hero heroValidaty='Joke'> </Hero>
         </ErrorBoundary>
          <ClickCounter /> 
        
          
    <Counter>{ (count, incrementCount)=> (
     <ClickCounterTwo count={count} incrementCount={incrementCount} />
    )} 
    </Counter>

<Counter >{ (count, incrementCount)=> (
     <HoverCounterTwo count={count} incrementCount={incrementCount} />
    )} 
     </Counter>
    

     {/*  <HoverCounterTwo />   
        <ClickCounterTwo />
          <User render={ (isLoggedIn) => isLoggedIn ? "Included" : "Guest" } /> */}
      </div>

    </div>
  )
}

export default App;
