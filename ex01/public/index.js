function App(){
    const App =  document.createElement('div');
    App.textContent = " HI HI HELLO ";
    return App;
}

document
    .getElementById('root').appendChild(App());