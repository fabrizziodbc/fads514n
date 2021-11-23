import React, { useState } from "react";

/// Mostrar una lista en base a un arreglo

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Javascript", "CSS", "HTLM", "React"],
    };
  }
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Las tecnologias del Front</h1>
        <ul style={styles.list}>
          {this.state.list.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    );
  }
} */


const App = () => {
  const [list] = useState(["Javascript", "CSS", "HTLM", "React"]);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Las tecnologias del Front</h1>
      <ul style={styles.list}>
        {list.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "100px",
  },
  list: {
    fontSize: "20px",
    flexGrow: 6,
  },
};

export default App;
