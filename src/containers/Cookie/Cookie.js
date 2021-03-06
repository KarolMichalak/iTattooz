import React from 'react';
import styles from './Cookie.module.css';
import PageHeaderContainer from '../../components/PagesHeader/PageHeaderContainer/PageHeaderContainer';
import PageHeader from '../../components/PagesHeader/PageHeader/PageHeader';

const cookie = () => {
    return (
        <PageHeaderContainer>
            <PageHeader>Cookie Policy</PageHeader>
            <div className={styles.content}>
                <div className={styles.bold}>What are Cookies?</div>
                <p>
                    Cookies are small text files that are placed on your
                    computer or mobile device by websites that you visit. They
                    are widely used in order to make websites work, or work more
                    efficiently, as well as to provide information to the owners
                    of the site.
                </p>
                <div className={styles.bold}>Controlling Cookies</div>
                <p>
                    Most web browsers allow some control of most cookies through
                    the browser settings. To find out more about cookies,
                    including how to see what cookies have been set and how to
                    manage and delete them, visit www.allaboutcookies.org.
                </p>
                <p>
                    You may limit site operation or functions if you limit
                    cookies.
                </p>
                <div className={styles.bold}>
                    How do we use cookies on our website?
                </div>
                <p />
                <div className={styles.bold}>Type of Cookies</div>
                <p>
                    Persistent cookies – these cookies remain on a user’s device
                    for the period of time specified in the cookie. They are
                    activated each time that the user visits the website that
                    created that particular cookie.
                </p>
                <p>
                    Session cookies – these cookies allow website operators to
                    link the actions of a user during a browser session. A
                    browser session starts when a user opens the browser window
                    and finishes when they close the browser window. Session
                    cookies are created temporarily. Once you close the browser,
                    all session cookies are deleted.
                </p>
            </div>
        </PageHeaderContainer>
    );
};

export default cookie;
