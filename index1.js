const parent = React.createElement("div",{id:"parent"},
   React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading1"},"How are you"),
    React.createElement("h2",{id:"heading2"},"I am fine")]
    
   )
);

const element = React.createElement(
  'button',
  { 
    onClick: () => alert('Clicked!'),
    className: 'btn'
  },
  'Click Me'
);
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);
      console.log(parent);