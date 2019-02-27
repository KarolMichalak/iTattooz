import React, { Component } from 'react';
import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navigation/Navbar/Navbar'

class Header extends Component {

    state = {
        messages: ['', 'Discover.', 'Design.', 'Create.'],
        currentMessage: [],
        index: 0,
        show: false
    }
    componentDidMount(){
        if (this.state.index < 3) {
            this.interval = setInterval(() => this.changeText(), 1000);
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);     
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.index > 3 ) {
            return false
        } else {
            return true
        }
    }
    
    changeText = () => {
        this.setState(prevState => ({
            ...prevState,
            show: !this.state.show
        }))
        this.setState(prevState => ({
            ...prevState,
            index: prevState.index + 1,
            currentMessage: this.state.messages[this.state.index + 1]
        }));
    }
    render() {
        let headerMain = null
        let headerSecondary = null

        if (this.state.index < 4) {
            headerMain = (
                <div className={styles.showMainHeader}>{this.state.currentMessage}</div>
            )
        }
        if (this.state.index === 3) {
            headerSecondary = (
                <div className={styles.showSecondaryHeader}>For artists. By artists.</div>
            )
        }
        return (
            <>
            <div className={styles.header}>
                <Logo/>
                <div className={styles.headerText}>
                    {headerMain}
                    {headerSecondary}
                </div>
                <Navbar/>
            </div>
            </>
        )
    }
}

export default Header;