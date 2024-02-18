/**@jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from '@emotion/react'
import { ReactComponentElement as InfoIcon } from "./info.svg"

type Props = {
    type?: string
    heading: string
    children: React.ReactNode
    closable?: boolean
    onClose?: () => void
};

export function Alert({ type = 'information',
    heading, children, closable, onClose }: Props) {
    const [visible, setVisible] = useState(true)
    if (!visible) {
        return <div>Zniknął!</div>;
    }
    function handleCloseClick() {
        setVisible(false)
        if (onClose) {
            onClose();
        }
    }
    return (
        <div css={css`
        text-align: center;
        margin-top: 20px;
        border: 1px solid transparent;
        border-radius: 4px;
        padding: 10px 15px;
        color: ${type === 'warning' ? "red" : "blue"};
        background-color: ${type === 'warning' ? "#f3e8da" : "#dcf1f3"};
        `}
        >
            <div css={css`
            font-weight: bold;
            `}>
                <span role="img"
                    aria-label={type === 'warning' ? 'Warning' : 'Information'}>
                    {type === 'warning' ? '⚠' :
                        (<InfoIcon className='fill-teal-900 w-5 h-5' />
                        )}
                </span>
                <span className='header-text'>{heading}</span>
            </div>
            {closable && (
                <button aria-label='Close' onClick={handleCloseClick} className="border-none rounded-md bg-emerald-700 text-white cursor-pointer shadow-2xl">
                    <span role="img" aria-label='Close'>
                        ❌
                    </span>
                </button>
            )
            }
            <div className="content">{children}</div>
        </div>
    );
}