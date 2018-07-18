import * as React from 'react'

import './style/index.css'
// tslint:disable-next-line
const ReactMarkdown = require('react-markdown')

export interface IMarkdownViewProps {
  source: string
  height?: number
}

class MarkdownView extends React.Component<IMarkdownViewProps> {

  public render() {
    const { source, height = 500 } = this.props
    return (
      <div className="markdown-view" style={{ height: `${height}px` }}>
        <ReactMarkdown source={source} />
      </div>
    )
  }
}

export default MarkdownView
