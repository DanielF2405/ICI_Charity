// components/FAQ.tsx
import React, { useMemo, useState } from "react";
import { api } from "~/trpc/react";

export const FAQ: React.FC = () => {
    const [open, setOpen] = useState<number | null>(1);

    const toggleQuestion = (index: number) => {
        setOpen(open === index ? null : index);
    };

    const { data } = api.content.getFaqs.useQuery();

    const faqs = useMemo(() => {
        return data?.slice(0, 3) || [];
    }, [data]);

    return (
        <div className="faq">
            <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
            <div className="faq-content">
                {faqs.map((faq, idx) => {
                    return (
                        <div
                            className="faq-item"
                            onClick={() => toggleQuestion(idx)}
                        >
                            <div className="faq-question">
                                <span>{faq.question}</span>
                                <img
                                    className="faq-arrow"
                                    alt="Arrow"
                                    src={
                                        open === idx
                                            ? "arrow-up.svg"
                                            : "arrow-down.svg"
                                    }
                                />
                            </div>
                            {open === idx && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
