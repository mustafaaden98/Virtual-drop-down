import React, { useState, useEffect } from "react";
import './style.css';

const Dropdown = ({
    onChange, data
    }) => {
    const [posX, setPosX] = useState('0px');
    const [posY, setPosY] = useState('0px');
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        document.addEventListener('contextmenu', _handleContextMenu);
        return () => {
            document.removeEventListener('contextmenu', _handleContextMenu);
        }
    }, []);

    const _handleContextMenu = e => {
        e.preventDefault();
        setPosX(`${e.pageX}px`);
        setPosY(`${e.pageY}px`);
        setOpen(true)
    };
    const _onClick = (e, item) => {
        isOpen && setOpen(false);
        if (item) {
            onChange(item)
        }
    }

    if (isOpen) {
        return (
            <div className="dropdown" style={{ top: posY, left: posX }} >
                {data && data.map((item, index) => {
                    return (
                        <div key={item.id} onClick={(e) => _onClick(e, item)} className="options">
                            <img src={item.url} width='100px' height='75px' />
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return null
    }
}

export default Dropdown;