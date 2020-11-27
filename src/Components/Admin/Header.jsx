import React, {useContext, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import "./header.css"
import logo from "../../assets/logo.png";
import {Navbar,Icon,NavItem,Modal,Button} from "react-materialize";
import Store from '../../store/store';
import axios from 'axios';
import config from '../../config.json';

const Header = () =>{
    const [data,setData] = useState({
        password:""
    })
    const [inputError,setInputError] = useState(false);
    const [passwordLength,setpasswordLength] = useState(false)
    const [confPass,setConfPass] = useState(false)
    const [consfirm,setConfirm] = useState("")
    useEffect(()=>{
        if(data.password=="")
        setInputError(true);
        else
        setInputError(false);
        if(data.password.length<6)
        setpasswordLength(true)
        else
        setpasswordLength(false);
        if(consfirm!=data.password)
        setConfPass(true)
        else
        setConfPass(false)
    })
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
        
    }
    const handleConfirmChange=(e)=>{
        setConfirm(e.target.value)
    }
    const changePassword = async () => {
        console.log(data)
        try{
            const result = await axios({
                url: `${config.BASE}/excal_admin/changepass/`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("FBIdToken")}`
                },
                data: {password:data.password}
            });
            console.log(result)
        }
        catch(err){
            console.log(err)
        }
    }
return(<>
  <Navbar
  alignLinks="right"
  brand={<a className="brand-logo s-logo" ><img src={logo} height="40" width="40"/><h3 className="heading"><Link className="no-link" to="/">SwayamKriti</Link></h3></a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
  className="black"
  >
        <>
        <Modal
                    actions={[<>{inputError&&<h4>Fill all details</h4>}</>,
                        <Button flat node="button" waves="green" disabled = {inputError||passwordLength||confPass} onClick={changePassword}>Submit</Button>,
                        <Button flat modal="close" node="button" waves="red">Close</Button>
                    ]}
                    bottomSheet={false}
                    fixedFooter={false}
                    header="Change Password"
                    id="Modal-0"
                    open={false}
                    options={{
                        dismissible: true,
                        endingTop: '10%',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        opacity: 0.5,
                        outDuration: 250,
                        preventScrolling: true,
                        startingTop: '4%'
                    }}
                    className="adminModal"
                    root={document.body}
                    trigger={<Button id="changePassword"className="white-text waves-effect adminChangepassword waves-light purple darken-2">
                    Change Password
                    </Button>}
                >
                    <div class="input-field">
                        <input id="password" name="password" type="password" class="validate" onChange={handleChange} />
                        <label htmlFor="password">New Password</label>
                        {passwordLength&&<p className="red-text">Password length should be atleast of 6 characters</p>}
                    </div>
                    <div class="input-field">
                        <input id="confirmpassword" name="password" type="password" class="validate" onChange={handleConfirmChange} />
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        {confPass&&<p className="red-text">Password does not match</p>}
                    </div>
                    
                </Modal>

            <NavItem  className="white-text waves-effect waves-light  btn"><Link style={{color:"white",textDecoration:"none"}} onClick={(e)=>{localStorage.removeItem("FBIdToken");localStorage.removeItem("isAdmin")}} to='/logout'>
              Logout</Link>
            </NavItem>
        </>
        
    
    
</Navbar>
</>
)
}

export default Header;