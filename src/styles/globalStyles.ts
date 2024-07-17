import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
 .diagram-component {
  width: 400px;
  height: 400px;
  border: solid 1px black;
  background-color: white;
}

.dropdown-container {
  margin: 10px;
  padding: 5px;
  background-color: #f0f0f0;
}

select {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
}

option {
  color: #333;
}

/* Conditional Styling */
.circular-progress {
  color: blue; /* Example color for 'saving' state */
}

.save-icon {
  color: green; /* Example color for 'saved' state */
}

  #home-container {
    background-image: url('../images/pexels-francesco-ungaro-673648.jpg');
  }
`;

export const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f5f5f5',
    text: '#333',
  },
};
