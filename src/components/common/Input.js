import React from "react";

const Input = (props) => {
    return (
        <div className="form-group mt-2" style={props.item.error ? { color: "red" } : null} >
            <label>{props.label}</label>
            <input
                type={props.type}
                className="form-control"
                placeholder={props.placeholder}
                value={props.item.value}
                style={props.item.error ? {color: "red", borderColor: "red"} : null}
                onChange={(event) => props.onChange(event.target.value)}
            />
            {props.item.error ? <p>{props.item.message}</p> : <></>}
        </div>);
}

export default Input;