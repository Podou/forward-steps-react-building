import * as React from 'react'

export interface IHeaderProps {
  onClickNav: any
}

// tslint:disable-next-line:no-var-requires
const styles = require('./styles/index.module.less')

class Header extends React.Component<IHeaderProps> {

  public onClick = (value: string) => {
    const { onClickNav } = this.props;
    onClickNav(value);
  }

  public render() {
    return (
      <header className={styles.header}>
        Header
        <button onClick={this.onClick.bind(this, 'Section 1')} >Section 1</button>
        <button onClick={this.onClick.bind(this, 'Section 2')} >Section 2</button>
        <button onClick={this.onClick.bind(this, 'Section 3')} >Section 3</button>
        <button onClick={this.onClick.bind(this, 'Section 4')} >Section 4</button>
        <button onClick={this.onClick.bind(this, 'Section 5')} >Section 5</button>
        <button onClick={this.onClick.bind(this, 'Section 6')} >Section 6</button>
        <button onClick={this.onClick.bind(this, 'Section 7')} >Section 7</button>
        <button onClick={this.onClick.bind(this, 'Section 8')} >Section 8</button>
        <button onClick={this.onClick.bind(this, 'Section 9')} >Section 9</button>
        <button onClick={this.onClick.bind(this, 'Section 10')} >Section 10</button>
        <button onClick={this.onClick.bind(this, 'Section 11')} >Section 11</button>
      </header>
    )
  }
}

export default Header
