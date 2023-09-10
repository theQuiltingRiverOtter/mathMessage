import { useState, useEffect } from 'react'
import Form from "./Form/Form"
import Container from './Container';
import FormButton from './Form/FormButton';
import "./styles/styles.css";

export default function App() {
  const [data, setData] = useState({
    message: "have fun",
    mathType: 'multiplication',
    timesTables: '1,2,3,4,5,6,7,8,9,10,11,12'
  })

  const [buttons, setButtons] = useState({
    showForm: false,
    showLegend: true,
    showButton: true
  })
  const [getQuote, setGetQuote] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  function checkLoaded() {
    setIsLoaded(!isLoaded);
  }

  useEffect(() => {
    async function getRandomQuote() {
      const result = await fetch('https://api.quotable.io/random');
      const jsonResult = await result.json();
      setGetQuote(jsonResult.content);
    }
    if (isLoaded) {
      getRandomQuote();
    }

  }, [isLoaded])

  function printFriendly() {
    const btns = document.querySelectorAll("button");
    for (let btn of btns) {
      btn.style.display = "none";
    }
    window.print();
    for (let btn of btns) {
      btn.style.display = "inline-block";
    }
  }

  function updateData(e) {
    if (
      e.target.name == "mathType" &&
      (e.target.value == "multiplication" || e.target.value == "multAndDiv")
    ) {
      data.timesTables = "";
    }
    if (e.target.checked) {
      data.timesTables += `${e.target.name},`;
    }
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  function handleClick() {
    setButtons(prevButtons => ({
      ...prevButtons,
      showForm: true,
      showLegend: false,
      showButton: false
    }))
  }

  function submitData(e) {
    e.preventDefault();
    setButtons(prevButtons => {
      return {
        ...prevButtons,
        showForm: false,
        showLegend: true,
        showButton: true
      }
    })
    setData(prevData => {
      return { ...prevData }
    })
  }

  return (
    <div className='App'>
      {buttons.showForm && <Form submitData={submitData} data={data} isLoaded={isLoaded} updateData={updateData} checkLoaded={checkLoaded} />}
      {buttons.showLegend && <Container
        message={(getQuote) ? getQuote : data.message}
        mathType={data.mathType}
        timesTables={data.timesTables}
      />}
      {buttons.showButton && <FormButton handleClick={handleClick} btnText="New Message" />}
      {buttons.showButton && <FormButton handleClick={printFriendly} btnText="Print Friendly" />}
    </div>
  )
}
