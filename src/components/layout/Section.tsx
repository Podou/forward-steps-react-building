import * as React from 'react'

export interface ISectionProps {
  title: string
}

// tslint:disable-next-line:no-var-requires
const styles = require('./styles/index.module.less')

class Section extends React.Component<ISectionProps> {

  public render() {
    const { title } = this.props;
    return (
      <section className={styles.section} id={title}>
        <span>{title}</span>
      </section>
    )
  }
}

export default Section
