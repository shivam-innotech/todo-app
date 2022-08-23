import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { startTransition, useState } from "react";

// function App() {

//   const [serviceList, setServiceList] = useState([{ box: "" },]);

//   const handleServiceAdd = () => {
//     setServiceListAdd([...serviceList, { box: "" }]);
//   };

//   return (
//     <>
//       <div className="container"><br />
//         <h2>Todo App</h2>

//         <div className="main">
//           {serviceList.map((singleService, index) => (
//             <div key={index} className="box">
//               <input class="form-check-input" type="checkbox" value="" id="invalidCheck"></input>
//               <label class="form-check-label" for="invalidCheck">&nbsp;1</label>
//               {serviceList.length - 1 === index && serviceList.length < 4 &&
//                 (
//                   <button type="button" class="btn btn-secondary" onClick={handleServiceAdd}>Submit</button>
//                 )}
//             </div>
//           ))}
//         </div><br />

//         <div className="main1">
//           <div class="mb-3">
//             <h4>Todo App</h4>
//             <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Todo"></input><br />


//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

function App() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  const [buttonText, setButtonText] = useState('Click');

  function handleClick() {
    setButtonText('Complete');
  }


  return (
    <div className="container">
      <form className="App">
        <h4 htmlFor="service">Todo</h4>
        <div className="form-field">

          {serviceList.map((singleService, index) => (
            <div key={index} className="">

              <div className="first-division">
                <input className="box" name="service" type="text" id="service" value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)} required />

                {serviceList.length - 1 === index && (
                  <button id="bnt" type="button" className="add-btn" onClick={handleServiceAdd}>
                    <span>Submit</span>
                  </button>
                )}

              </div>
            </div>
          ))}

        </div>
        <div className="Todo App">
          <h1>Todo App</h1>

          {serviceList && serviceList.map((singleService, index) => (
            <div key={index}> {singleService.service &&
              <div className="box" id="flx">
                <input type="checkbox" onClick={handleClick}></input>
                {singleService.service}
                <p id='comp'>{buttonText}</p>
              </div>}
            </div>
          ))
          }

        </div>
      </form>
    </div>
  );
}

export default App;