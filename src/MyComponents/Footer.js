import React from 'react'

export const Footer = () => {
    let footerStyle={
        width:"100%",
        margin: "155px 5px 0px 5px"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center py-3">Copyright &copy; Rohan Dhimal</p>
        </footer>
    )
}
