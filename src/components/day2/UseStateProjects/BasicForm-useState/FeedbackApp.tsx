import React, { useEffect, useRef, useState } from "react";
import './FeedbackApp.css';

type FeedbackItem = {
    id: string;
    text: string;
    createdAt: number;
};

export const FeedbackApp = () => {
    const [feedback, setFeedback] = useState('');
    const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>(() => {
        try {
            const raw = localStorage.getItem('feedbackList');
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });
    const [error, setError] = useState('');
    const maxLen = 250;
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        try {
            localStorage.setItem('feedbackList', JSON.stringify(feedbackList));
        } catch {}
    }, [feedbackList]);

    const clearError = () => setError('');

    const onSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        const trimmed = feedback.trim();
        if (!trimmed) {
            setError('Please enter some feedback.');
            return;
        }
        if (trimmed.length > maxLen) {
            setError(`Keep feedback under ${maxLen} characters.`);
            return;
        }

        const item: FeedbackItem = {
            id: Date.now().toString(),
            text: trimmed,
            createdAt: Date.now(),
        };

        setFeedbackList(prev => [item, ...prev]);
        setFeedback('');
        clearError();
        textareaRef.current?.focus();
    };

    const removeItem = (id: string) => {
        setFeedbackList(prev => prev.filter(p => p.id !== id));
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            onSubmit();
        }
    };

    return (
        <section className="feedback-card">
            <header className="feedback-header">
                <h3>Feedback</h3>
                <p className="muted">Share thoughts — Ctrl+Enter to submit. Saved locally for demo.</p>
            </header>

            <form className="feedback-form" onSubmit={onSubmit}>
                <textarea
                    ref={textareaRef}
                    value={feedback}
                    maxLength={maxLen}
                    placeholder="Write your feedback..."
                    onChange={e => { setFeedback(e.target.value); clearError(); }}
                    onKeyDown={onKeyDown}
                    aria-label="Feedback input"
                />

                <div className="form-row">
                    <div className="meta">
                        <span className="char-count">{feedback.length}/{maxLen}</span>
                        {error && <span className="error">{error}</span>}
                    </div>

                    <div className="actions">
                        <button
                            type="button"
                            className="btn ghost"
                            onClick={() => setFeedback('')}
                            disabled={!feedback}
                        >
                            Clear
                        </button>

                        <button
                            type="submit"
                            className="btn primary"
                            disabled={!feedback.trim()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

            <div className="feedback-list">
                {feedbackList.length === 0 ? (
                    <div className="empty">No feedback yet — be the first!</div>
                ) : (
                    <ul>
                        {feedbackList.map((item, idx) => (
                            <li key={item.id} className="feedback-item">
                                <div className="item-main">
                                    <div className="item-text">{item.text}</div>
                                    <div className="item-meta">
                                        <span className="time">{new Date(item.createdAt).toLocaleString()}</span>
                                        <span className="index">#{feedbackList.length - idx}</span>
                                    </div>
                                </div>
                                <button className="btn small danger" onClick={() => removeItem(item.id)} aria-label={`Delete feedback ${idx + 1}`}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
