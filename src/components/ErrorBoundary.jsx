import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    padding: '2rem',
                    margin: '1rem 0',
                    textAlign: 'center',
                    border: '1px dashed var(--color-accent, #FF5252)',
                    borderRadius: '8px',
                    background: 'rgba(255, 82, 82, 0.05)',
                    color: 'var(--color-text, #1a1a1a)'
                }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary, #D32F2F)' }}>
                        Something went wrong loading this section.
                    </h4>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        Please refresh the page or contact support if the issue persists.
                    </p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
