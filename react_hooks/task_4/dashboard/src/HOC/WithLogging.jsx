import React from "react";

function WithLogging(WrappedComponent) {
    const componentName =
        WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component";

    class WithLoggingComponent extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    WithLoggingComponent.displayName = `WithLogging(${componentName})`;

    return WithLoggingComponent;
}

export default WithLogging;
