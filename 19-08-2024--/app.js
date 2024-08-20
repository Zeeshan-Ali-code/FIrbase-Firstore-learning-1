  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getFirestore,
    collection,
    addDoc,
    getDocs 

   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBc1SXN7Qv32AMJTF50vWn6x_80Tb8j1Hw",
    authDomain: "e-commerce-44751.firebaseapp.com",
    projectId: "e-commerce-44751",
    storageBucket: "e-commerce-44751.appspot.com",
    messagingSenderId: "33661100436",
    appId: "1:33661100436:web:3aefa0de50a88767e4ef81",
    measurementId: "G-RGF9H9Y57N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  let numbersCollection = collection( db, "numbers")
  let todosCollection = collection(db, "todos")

  const todo_input = document.getElementById("todo_input")
  const add_todo = document.getElementById("add_todo")
  const todo_list = document.getElementById("todo_list")
  getTodosFromDb()
  add_todo.addEventListener("click", addTodoToDb)

async  function  addTodoToDb(){
  try{
    const obj = {
      todo: todo_input.value,
      createdAt : new Date().toISOString( )
    };
    
    const docRef = await addDoc(todosCollection, obj);
    console.log('Todo Added=>', docRef);
    todo_input.value  = ""; 
    
  }
  catch(e){
    console.log(e);
    
  }
}



async function getTodosFromDb(){
  try{
    const querySnapshot = await getDocs(todosCollection);
    todo_list.innerHTML = ''
querySnapshot.forEach((doc) => {
  console.log("Doc=>", doc.id); 
  const { todo, createdAt} = doc.data();
  const ele = `<li id=${Doc.id}>${todo} - ${new Date (
    createdAt)
    .toLocaleDateString()}  </li>`;
todo_list.innerHTML += ele;

  console.log(todo, createdAt);
   
    
});

// `${doc.id} => ${doc.data()}`
  }
  catch(e){
    console.log(e);
    
  }
}
//   console.log("app==>", app);
// addNumberToDB()
// async function addNumberToDB(){
//     try {
//       const docRef = await addDoc(numbersCollection, {
//         number: Math.round(Math.random() * 1000000),
//       });
      
//       console.log("docRef=>", docRef);
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
// }