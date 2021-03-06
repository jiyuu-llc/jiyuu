import React, {Component} from 'react';


class Modal extends Component {
    render() {
        if (this.props.isOpen === false){
            scrollControl.enableScroll();
            return null;
        }else {

            scrollControl.disableScroll();

            let modalStyle = {
                top: '0',
                position: 'absolute',
                zIndex: '9999',
                maxHeight: '100vh',
                overflow: 'auto'
            };

            if (this.props.width && this.props.height) {
                modalStyle.width = this.props.width + 'px'
                modalStyle.height = this.props.height + 'px'
                modalStyle.marginLeft = '-' + (this.props.width / 2) + 'px',
                    modalStyle.marginTop = '-' + (this.props.height / 2) + 'px',
                    modalStyle.transform = null
            }

            if (this.props.style) {
                for (let key in this.props.style) {
                    modalStyle[key] = this.props.style[key]
                }
            }

            let backdropStyle = {
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: '0px',
                left: '0px',
                zIndex: '9998',
                background: 'rgba(0, 0, 0, 0.3)'
            };

            if (this.props.backdropStyle) {
                for (let key in this.props.backdropStyle) {
                    backdropStyle[key] = this.props.backdropStyle[key]
                }
            }

            return (
                <div className="dynamicRender">
                    <div className={this.props.className} style={modalStyle}>
                        {this.props.children}
                    </div>
                    {!this.props.noBackdrop &&
                    <div className={this.props.backdropClassName} style={backdropStyle}
                         onClick={e => this.close(e)}/>}
                </div>
            )
        }
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default Modal;