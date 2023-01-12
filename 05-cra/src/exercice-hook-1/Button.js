// Version "normale"
// function Button(props) {
//     return <button className={props.className}>{props.text}</button>;
// }

// Version raccourcie
function Button({ className, text }) {
    return <button className={className}>{text}</button>;
}

export default Button;
