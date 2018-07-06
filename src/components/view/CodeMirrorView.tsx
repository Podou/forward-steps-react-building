
import * as React from 'react'
// tslint:disable-next-line:no-var-requires
const CodeMirror = require('react-codemirror')
// tslint:disable-next-line
require('codemirror/lib/codemirror.css')
// tslint:disable-next-line
// require('codemirror/theme/elegant.css')
// tslint:disable-next-line
require('codemirror/mode/javascript/javascript')
// import CodeMirror from 'react-codemirror'

const options = {
  lineNumbers: true,
  // theme: 'elegant',
  mode: 'javascript',
}

export interface ICodeViewProps {
  code: string
}

class CodeView extends React.Component<ICodeViewProps> {
  codeMirrorRef: any

  constructor(props: any) {
    super(props)
    this.codeMirrorRef = React.createRef()
  }

  componentWillMount() {
    this.setState({
      code: this.props.code
    })
  }

  onCodeMirror = (e: any) => {
    console.log(e)
  }

  componentWillReceiveProps(nextProps: any) {
    const { code } = nextProps
    const editor = this.codeMirrorRef.current.getCodeMirror()
    editor.setValue(code)
  }

  render() {
    const { code } = this.props
    return (
      <div style={{ border: '1px solid #ccc', fontSize: '14px' }}>
        <CodeMirror ref={this.codeMirrorRef} defaultValue ={code} options={options} />
      </div>
    )
  }
}

export default CodeView
