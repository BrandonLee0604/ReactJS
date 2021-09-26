import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // When use Ctrl + click it will open a new window and open the link
        if (event.metaKey || event.ctrlKey) {
            return;
        }
    
        // Prevent default behavior of browser, such as full page reload
        event.preventDefault();
        window.history.pushState({}, '', href);
        
        // Communicate over route components that the URLs have changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        
    };
    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;