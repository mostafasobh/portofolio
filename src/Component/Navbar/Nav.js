import React from 'react';
import './Nav.scss'
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';


// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: 'green',
//     display:'flex'
//   },
// }));

// export default function SimpleTabs() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const [scrollVal, setScrollVal] = React.useState('static');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  
//   window.addEventListener('scroll',()=>{
//     window.scrollY > 505 ? setScrollVal('fixed') : setScrollVal('static')
//   })
//   return (
//     <div className={classes.root}>
//       <AppBar position={scrollVal}>
//         <Tabs value={value} onChange={handleChange} centered={true} fullwidth={'true'} aria-label="simple tabs example">
//           <Tab label="Item One" {...a11yProps(0)} style={{outline:'none'}}/>
//           <Tab label="Item Two" {...a11yProps(1)} style={{outline:'none'}}/>
//           <Tab label="Item Three" {...a11yProps(2)}style={{outline:'none'}} />
//         </Tabs>
//       </AppBar>

//     </div>
//   );
// }

export default function Navbar(){

  // setTimeout(()=>{

  //   console.log(document.getElementById('check').checked)
  // },100)
  const toggleNav=()=>{ 
    if(window.innerWidth <= 858){
      document.getElementById('check').checked = !document.getElementById('check').checked

    }
  }


  return(
    <nav>
      <input type='checkbox' id='check'/>
      <label for='check' className='checkbtn' >
    <i className='fas fa-bars'></i>
      </label>
      <label className='logo'>DesignX</label>
      <ul>
        <li><a onClick={()=>toggleNav()} href='#home'>Home</a></li>
        <li><a onClick={()=>toggleNav()} href='#about'>About</a></li>
        <li><a onClick={()=>toggleNav()} href='#projects'>Projects</a></li>
        <li><a onClick={()=>toggleNav()} href='#contacts'>Contacts</a></li>
      </ul>
  
    </nav>
  )
}