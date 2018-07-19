import * as React from 'react';
import './App.css';

import { Container, Header, Section } from './components/layout';

class App extends React.Component {

  public scrollToAnchor  = (anchorName: string) => {
    if (anchorName) {
      const anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'}); }
    }
  }

  public render() {
    return (
      <div className="App">
        <Header onClickNav={this.scrollToAnchor } />
        <Container>
          <Section title="Section 1" />
          <Section title="Section 2" />
          <Section title="Section 3" />
          <Section title="Section 4" />
          <Section title="Section 5" />
          <Section title="Section 6" />
          <Section title="Section 7" />
          <Section title="Section 8" />
          <Section title="Section 9" />
          <Section title="Section 10" />
          <Section title="Section 11" />
        </Container>
      </div>
    );
  }
}

export default App;
