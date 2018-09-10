import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import KindEditor from 'kindeditor';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };

  /*===properties end===*/

  componentDidMount() {
    KindEditor.create('#test1', {
      autoHeightMode: true,
      allowFlashUpload: false,
      allowMediaUpload: false,
      allowFileUpload: false,
      basePath: '/kindeditor/dist/',
      items: [
        'source', '|', 'undo', 'redo', '|', 'preview', '|', 'justifyleft', 'justifycenter', 'justifyright',
        'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent',
        'clearhtml', 'quickformat', '|', 'fullscreen',
        'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
        'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image',
        'table', 'hr', 'emoticons',
        'anchor', 'link', 'unlink'
      ],
      width: '100%',
      afterSelectFile: function (inEvent) {
        debugger;
        console.log('afterSelectFile:->', inEvent);
      }
    });
  }

  render() {
    const {className, ...props} = this.props;
    return (
      <textarea id="test1" className={classNames('react-kindeditor', className)} {...props} />
    );
  }
}
