
export default function Disclaimer (){

  const disclaimer = [
  {id: 1, text: 'Responses may not always be accurate: ChatGPT generates responses based on patterns and information from its training data. While it strives to provide accurate and helpful information, there is a possibility of incorrect or incomplete responses.'},

   {id: 2, text: "Lack of real-time updates: ChatGPT's training data has a knowledge cutoff date, and it may not be aware of the most recent events or developments beyond that date. Therefore, it is advised to verify the information provided by ChatGPT with up-to-date and reliable sources."},
    {id: 3, text: 'Potential biases: ChatGPT has been trained on a vast amount of text from the internet, which can include biased or controversial content. As a result, the model may inadvertently exhibit biases in its responses. It is important to critically evaluate and cross-reference the information obtained from ChatGPT.'},
    {id: 4, text: 'No personal or sensitive information: Avoid sharing any personally identifiable or sensitive information while using this application. ChatGPT does not have the ability to safeguard or handle such information securely.'},
    {id: 5, text: 'Use at your own risk: The use of ChatGPT in this application is at your own discretion and risk. The developers and OpenAI cannot be held liable for any consequences arising from the use of this technology.'},
  
  ]

 const names =[
  {id: 1, name: 'Allison'},
  {id: 2, name: 'Peter'},
  {id: 3, name: 'George'},
  {id: 4, name: 'Dennis'},
  {id: 5, name: 'Engramar'},
 ]
const nameList = names.map((name) =>
  <li key={name.id}>{name.name}</li>
);

const disclaimerList = disclaimer.map((disclaimer) =>
  <li key={disclaimer.id}>{disclaimer.text}</li>
);
  return (
    <div>
      <p>Disclaimer: The following chat interactions within this application are powered by an artificial intelligence language model known as ChatGPT, developed by OpenAI. While ChatGPT has been trained on a diverse range of data and has undergone rigorous testing, it is important to understand the limitations of this technology.</p>
      <dl className="mb-2">
       {disclaimerList}
      </dl>
      <p>Remember to exercise caution, critically evaluate responses, and consult appropriate experts or reliable sources when necessary.</p>
  <p className="mb-2">Special thanks to NSWJA Canterbury-Bankstown Branch for collaborating</p>
  {nameList}
    </div>
  )

}